//action types

//for movement on main menu
export const CLOCKWISE='CLOCKWISE';
export const ANTI_CLOCKWISE='ANTI_CLOCKWISE';

//for movement on songs menu
export const ANTICLOCKWISE_SONG='ANTICLOCKWISE_SONG';
export const CLOCKWISE_SONG='CLOCKWISE_SONG';

//click events of buttons present on ipod
export const MAIN_MENU='MAIN_MENU';
export const SELECT="SELECT";
export const PAUSE="PAUSE";
export const PLAY="PLAY";
export const NEXT_SONG="NEXT_SONG";
export const PREV_SONG="PREV_SONG";
export const SELECT_SONG="SELECT_SONG";


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
//to change the active menu in songs menu in clockwise direction
export function changeMenuSong1(curr)
{
    return {
        type:CLOCKWISE_SONG,
        curr:curr

    }
}
//to change active menu in songs menu in anti_clockwise direction 
export function changeMenuSong2(curr)
{
    return {
        type:ANTICLOCKWISE_SONG,
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
// to select the song 
export function selectOpt2(curr)
{
    return {
        type:SELECT_SONG,
        curr:curr
    }
}
//to pause the song
export function pause()
{
    return {
        type:PAUSE
    }
}
//to play the song
export function play()
{
    return {
        type:PLAY
    }
}
//play next song
export function nextsong()
{
    return {
        type:NEXT_SONG
    }
}
//play prev song
export function prevsong()
{
    return {
        type:PREV_SONG
    }
}