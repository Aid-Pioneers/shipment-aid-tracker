import { SupabaseClient } from "@supabase/supabase-js";

export interface SignInWithPasswordData {
  email: string;
  password: string;
}

export interface SignUpWithPasswordData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
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

  async signInWithPassword(data: SignInWithPasswordData) {
    return this.supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });
  }

  async signOut() {
    const isSignedIn = await this.isUserSignedIn();

    if (isSignedIn) {
      return await this.supabase.auth.signOut();
    }
  }

  async signUp(
    data: SignUpWithPasswordData,
  ) {
    return this.supabase.auth.signUp({
      email: data.email,
      password: data.password,
      options: {
        data: {
          first_name: data.firstName,
          last_name: data.lastName,
        },
      },
    });
  }
}
