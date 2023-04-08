import {
  Anchor,
  Button,
  Checkbox,
  Container,
  Group,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import { joiResolver, useForm } from '@mantine/form';
import Alert from 'components/alerts/alert';
import { setCookieToken } from 'lib/cookie.helper';
import { customJoi } from 'lib/joi';
import { LoginInterface } from 'pages/user/user.interface';
import { setUserData } from 'pages/user/user.slice';
import { login } from 'pages/user/user.thunks';
import { registerSchema } from 'pages/user/user.validator';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'rtk/hooks';

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const form = useForm({
    initialValues: { password: '', email: '', rememberMe: true },
    validate: customJoi(registerSchema),
  });

  const mutation = useMutation(async (values: LoginInterface) => {
    const response = await login(values);
    if (response) {
      // const {isAdmin, roles} = response.user;
      dispatch(setUserData(response.user));
      setCookieToken(response.token);
      navigate('/');
      return Promise.resolve();
    }

    return Promise.reject();
  });

  return (
    <Container size={460} my={40}>
      <Title align="center">Welcome back!</Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Do not have an account yet?&nbsp;
        <Anchor<'a'> href="#" size="sm" onClick={(event) => event.preventDefault()}>
          Create account
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={form.onSubmit((values) => mutation.mutate(values))}>
          <Alert />
          <TextInput label="Email" {...form.getInputProps('email')} />
          <PasswordInput label="Password" mt="md" {...form.getInputProps('password')} />
          <Group position="apart" mt="lg">
            <Checkbox
              label="Remember me"
              sx={{ lineHeight: 1 }}
              {...form.getInputProps('rememberMe', { type: 'checkbox' })}
            />
            <Anchor<'a'> onClick={(event) => event.preventDefault()} href="#" size="sm">
              Forgot password?
            </Anchor>
          </Group>
          <Button fullWidth mt="xl" type="submit">
            Sign in
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
