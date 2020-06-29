//action types
export const CLOCKWISE='CLOCKWISE';
export const ANTI_CLOCKWISE='ANTI_CLOCKWISE';
export const MAIN_MENU='MAIN_MENU'
export const SELECT="SELECT"


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
export function mainMenu()
{
    return {
        type:MAIN_MENU
    }
}
export function selectOpt(curr)
{
    return {
        type:SELECT,
        curr:curr
    }
}