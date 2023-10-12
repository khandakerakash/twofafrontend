export class User {
    EmpId: number;
	Is2faenable?: boolean;
	TotpSecretkey: string;
	TotpEnableon?: Date;
	TotpDisableon?: Date;
	TotpDisablereason: string;
	TotpVerifyCode: string;
	BackupCode: string;
	IsTotpSecretkeyExits: boolean;

}
