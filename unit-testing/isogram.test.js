import {it, expect, describe} from 'vitest';
import { isIsogram } from './isogram';

it ("should return true for 'Dermatoglyphics' ", ()=>{
    const result = isIsogram("Dermatoglyphics");
    expect(result).toBe(true)
})

it ("should return false for 'aba' ", ()=>{
    const result = isIsogram("aba");
    expect(result).toBe(false)
})
it ("should return false for 'moOse' ", ()=>{
    const result = isIsogram("moOse");
    expect(result).toBe(false)
})