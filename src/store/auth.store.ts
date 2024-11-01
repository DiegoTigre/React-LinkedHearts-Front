import { create } from "zustand";
import { persist } from "zustand/middleware";



interface AuthState {
    status:  'authenticated' | 'unauthenticated' | 'checking';
    token?: string;
    user?: {
        name: string;
        email: string;
    },

    login: (email: string, password: string) => void;

    logout: () => void;
}


export const useAuthStore = create( persist<AuthState>(

    ( set ) => ({

        status: 'checking',
        token: undefined,
        user: undefined,
    
    
        login: (email: string, password: string) => {
    
            set({
                status:"authenticated",
                token: 'abv132',
                user: {
                name:'Diego Rivera',
                email: email,
                }
            })
            
        },
    
        logout: () => {
            set({
                status: "unauthenticated",
                token: undefined,
                user: undefined
            });
    
        },
    }),{
        name: 'auth'
    }

))