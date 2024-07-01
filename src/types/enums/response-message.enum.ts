enum ResponseMessage {
    SUCCESS = 'Success.',
    VALIDATION_FAIL = 'Validation Failed.',
    DUPLICATE_EMAIL = 'Duplicate email.',
    DUPLICATE_NICKNAME = 'Duplicate nickname.',
    DUPLICATE_TEL_NUMBER = 'Duplicate tel number.',
    NO_EXIST_USER = 'This user does not exist.',
    NO_EXIST_BOARD = 'This board does not exist.',
    SIGN_IN_FAILE = 'Login information minmatch.',
    AUTHORIZATION_FAIL = 'Authorization Failed.',
    NO_PERMISSION = 'Do not have permission',
    DATABASE_ERROR = 'Database error.'
};

export default ResponseMessage;