// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

const createGuid: () => string = (): string => {
    let d = new Date().getTime();
    const guid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c: string) => {
        const r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === "x" ? r : (r & 0x3 | 0x8)).toString(16);
    });

    return guid;
};

const createNoDashGuid: () => string = (): string => {
    return createGuid().replace(new RegExp("-", "g"), "").toUpperCase();
};

export { createGuid, createNoDashGuid };
