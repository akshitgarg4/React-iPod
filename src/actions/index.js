//action types
export const CLOCKWISE='CLOCKWISE';
export const ANTI_CLOCKWISE='ANTI_CLOCKWISE';
export const MAIN_MENU='MAIN_MENU'


//action creators
export function changeMenu1(curr)
{
    return {
        type:CLOCKWISE,
        curr:curr

    }
}
export function changeMenu2(curr)
{
    return {
        type:ANTI_CLOCKWISE,
        curr:curr
    }
}
export function mainMenu(curr)
{
    return {
        type:MAIN_MENU,
        curr:curr
    }
}