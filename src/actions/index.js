//action types
export const CLOCKWISE='CLOCKWISE';
export const ANTI_CLOCKWISE='ANTI_CLOCKWISE';
export const MAIN_MENU='MAIN_MENU'
export const SELECT="SELECT"


//action creators

//to change active menu in clockwise direction 
export function changeMenu1(curr)
{
    return {
        type:CLOCKWISE,
        curr:curr

    }
}
//to change active menu in anti_clockwise direction 
export function changeMenu2(curr)
{
    return {
        type:ANTI_CLOCKWISE,
        curr:curr
    }
}

//to land the user on main menu list when he presses the menu button
export function mainMenu()
{
    return {
        type:MAIN_MENU
    }
}

//to select and show the item selected by the user on menu list
export function selectOpt(curr)
{
    return {
        type:SELECT,
        curr:curr
    }
}