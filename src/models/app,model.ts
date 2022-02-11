export interface IAuthState { 
    status: 'idle' | 'loading',
    error: string | null,
    token: string | null
}