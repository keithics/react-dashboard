import {
    Icon2fa,
    IconDatabaseImport,
    IconFingerprint,
    IconKey,
    IconReceipt2,
    IconSettings,
    IconUser
} from '@tabler/icons';

export const navbarMenu = [
    { link: 'baptism', label: 'Baptismal Certificates', icon: IconUser },
    { link: 'billing', label: 'Billing', icon: IconReceipt2 },
    { link: 'security', label: 'Security', icon: IconFingerprint },
    { link: 'ssh', label: 'SSH Keys', icon: IconKey },
    { link: 'database', label: 'Databases', icon: IconDatabaseImport },
    { link: 'auth', label: 'Authentication', icon: Icon2fa },
    { link: 'settings', label: 'Other Settings', icon: IconSettings },
];
