export const selectAuth = state => state.auth;

export const selectToken = state => state.auth?.authData?.id_token;
