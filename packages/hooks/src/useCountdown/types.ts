export type UseCountdownArgs = {
    endDate: Date;
    onStart?: () => void;
    onEnd?: () => void;
};

export type UseCountdownHook = [ number ];
