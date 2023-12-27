import { AuthError, SupabaseClient } from '@supabase/supabase-js';

export interface SignInWithPasswordData {
  email: string,
  password: string
}

export class AuthService {
  supabase: SupabaseClient;

  constructor(supabase: SupabaseClient) {
    this.supabase = supabase;
  }

  async isUserSignedIn(): Promise<Boolean> {
    const {
      data: { session },
    } = await this.supabase.auth.getSession();
    return session?.user != null;
  }

  async isUserSignedOut(): Promise<Boolean> {
    return !this.isUserSignedIn();
  }

  async signInWithPassword(data: SignInWithPasswordData, onSuccess: () => void, onError: (error: AuthError) => void = (error) => console.warn('Encountered an error when signing in.', error.cause)) {
    const { error } = await this.supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });

    return error ? onError(error) : onSuccess();
  }

  async signOut(onSuccess: () => void, onError: (error: AuthError) => void = (error) => console.warn('Encountered an error when signing out.', error.cause)) {

    const isSignedIn = await this.isUserSignedIn();

    if (isSignedIn) {
      const { error } = await this.supabase.auth.signOut();
      return error ? onError(error) : onSuccess();
    } else {
      return onSuccess()
    }
  }

  async signUp(data: { firstName: string; lastName: string; email: string; password: string }, onSuccess: () => void, onError: (error: AuthError) => void = (error) => console.warn('Encountered an error when logging in.', error.cause)) {
    const { error } = await this.supabase.auth.signUp({
      email: data.email,
      password: data.password,
      options: {
        data: {
          first_name: data.firstName,
          last_name: data.lastName,
        },
      },
    });

    return error ? onError(error) : onSuccess();
  }
}
