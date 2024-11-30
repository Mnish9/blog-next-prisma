export const REMEMBER_ME = "RememberMe";
export const ACCESS_TOKEN_KEY = "__ATK__";
export const NAME_REGEX = /^[a-zA-Z0-9 !@#$%^&*(),.?":{}|<>']+$/;
export const EMAIL_REGEX = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

export const ACCESS_USER_DATA_KEY = "__SFA__";
export const EMAIL_ADDRESS_VALIDATION =
	/^[a-zA-Z][\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const HEIGHT_REGEX = /^\d{1,2}'\d{1,2}"$/;
export const WEIGHT_REGEX = /^\d{1,3}.\d{1,3}$/;
export const ZIPCODE_REGEX = /^[0-9]{5}$/;
export const REQUISITION_REPORT_AMOUNT = 549;

export const ACCOUNT_TYPE = {
	user: "User",
	admin: "Admin",
};

export const MESSAGE = {
	success: "success",
};

export const PASSWORD_REGEX =
	/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,16}$/;

export const PASSWORD_MAX_LENGTH = 25;

export const EXTENSION = ["jpeg", "jpg", "png", "webp", "heif"];

export const OTP_VERIFICATION = /^\d{4}$/;

export const PERSONAL_STUFF_TYPE = {
	note: "note",
	image: "image",
	file: "file",
};
export const OTP_VERIFICATION_TYPE = {
	FORGOT: "forgot",
	SIGNUP: "signup",
};
export const sessionTime = (days: number) => {
	return new Date(Date.now() + days * 24 * 60 * 60 * 1000);
};
export const SOCIAL_PLATEFORMS = {
	google: "google",
};
export const GENERAL = {
	loading: "loading",
	authenticated: "authenticated",
};

export enum MessageType {
	success = "success",
	error = "error",
}

export const FILE_EXTENSION = ["pdf"];
export const MAX_FILE_SIZE_MB = 20 * 1024 * 1024;
export const LIST_RECORDS_LIMIT = 10;
export const ReportType = {
	pending: "Review Pending",
	reviewed: "Reviewed",
};

export const HEADER_TITLE = {
	home: "DR. Ara",
	author: "Stratum 9 - About Us",
	login: "Login",
	stratum_overview: "Stratum Overview",
	reset_password: "Reset Password",
	forgot_passwprd: "Forgot Password",
	account_verification: "Account Verification",
	change_password: "Change Password",
	signup: "Signup",
	verify: "Verification",
	resources: "Resources",
	cognitive_abilities_as: "Cognitive Abilities - Assessment",
	mastery_of_emotions_as: "Mastery of Emotions - Assessment",
	mentality_as: "Mentality - Assessment",
	personal_health_as: "Personal Health - Assessment",
	social_interaction_as: "Social Interaction - Assessment",
	homepage: "Stratum 9",
	my_stratum: "My Stratum",
	performance_videos: "Performance Videos",
	about_us: "About Us",
	self_ass: "Self Assessment",
	dashboard: "Dashboard",
	coming_soon: "Coming Soon",
	skills: "45 Performance-based Skills",
	privacy_policy: "Privacy Policy",
	ppau: "PPAU",
	profile: "Profile",
	edit_profile: "Edit Profile",
	stratum_definitions: "Stratum Definitions",
	terms_and_conditions: "Terms and Conditions",
	stratum9: "Stratum 9",
	orders: "Orders",
	orders_tracking: "Track Order",
	billing: "Billing",
	define_goal: "Define Your Goal",
	organize_path: "Organize Your Path",
	initiate_daily_action: "Initiate Daily Action",
	timeline_to_goal: "Timeline To Goal",
	goal_detail: "Goal Details",
	reminders: "Reminders",
	goal_history: "Goal History",
	chapter_resource: "Chapter Resources",
	notification: "Notifications",
};
