import { defineStore } from 'pinia';
import { PomoSessionType, PomoSettings } from '@/domain/Pomodore';

interface PomoState {
    settings: PomoSettings;
    session: Partial<{
        current: PomoSessionType;
        timeLeft: string;
        isOver: boolean;
    }>;
}

export const usePomoStore = defineStore('pomodore', {
    state: (): PomoState => ({
        settings: {
            workSessionLength: 0.1,
            breakSessionLength: 0.2,
            sessions: 3
        },
        session: {}
    }),
    getters: {
        workSession: (state) => state.settings?.workSessionLength,
        breakSession: (state) => state.settings?.breakSessionLength,
        sessions: (state) => state.settings?.sessions
    },
    persist: true
});
