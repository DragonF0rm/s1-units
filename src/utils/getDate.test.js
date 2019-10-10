import React from 'react';
import {getDate} from './getDate.js';

describe('getDate function', () => {
    it('date is correct', () => {
        const epoch = 0;
        const result = getDate(epoch);
        expect(result).toBe('1 января, чт, 1970 год');
    });

    it('date is null', () => {
        const result = getDate(null);
        expect(result).toBeUndefined();
    });
});
