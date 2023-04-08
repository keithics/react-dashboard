import { AlertInterface } from 'components/alerts/alert.interface';
import AlertError from 'components/alerts/error.alert';
import AlertSuccess from 'components/alerts/success.alert';
import AlertValidation from 'components/alerts/validation.alert';
import IfElse from 'components/conditionals/if-else.conditional';
import If from 'components/conditionals/if.conditional';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { resetRequest, selectRequest } from 'request/request.slice';
import { useAppDispatch, useAppSelector } from 'rtk/hooks';

// set messageOnly to true only get the message string
function Alert({ messageOnly = false }: AlertInterface) {
  const { isFailure, isValidationError, saveSuccess, deletedSuccess, message } = useAppSelector(selectRequest);
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    onClose();
  }, [pathname]);

  function onClose(): void {
    dispatch(resetRequest());
  }

  return (
    <>
      <IfElse show={messageOnly}>
        <div>{message}</div>
        <div>
          <If show={isFailure}>
            <AlertError message={message} onClose={onClose} />
          </If>
          <If show={isValidationError}>
            <AlertValidation message={message} onClose={onClose} />
          </If>

          <If show={saveSuccess}>
            <AlertSuccess message={message} onClose={onClose} />
          </If>

          <If show={deletedSuccess}>
            <AlertSuccess message={message} onClose={onClose} />
          </If>
        </div>
      </IfElse>
    </>
  );
}

export default Alert;
