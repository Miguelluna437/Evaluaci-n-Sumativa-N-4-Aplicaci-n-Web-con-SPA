export const saveTerminalToLocalStorage = (terminal) => {
    const terminals = JSON.parse(localStorage.getItem('terminals')) || [];
    terminals.push(terminal);
    localStorage.setItem('terminals', JSON.stringify(terminals));
};

export const getTerminalsFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('terminals')) || [];
};
