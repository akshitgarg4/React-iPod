import {ANTI_CLOCKWISE,CLOCKWISE,ANTICLOCKWISE_SONG,CLOCKWISE_SONG,MAIN_MENU,SELECT,SELECT_SONG} from '../actions';

//initial state of store
var initialState={
    activeMenu:'game',
    activeSong:'song1',
    homepage:true,
    coverflow:false,
    game:false,
    music:false,
    setting:false,
    menu:false,
    play:'',
    menuItems:false
};

export default function rootReducer (state=initialState,action)
{
    switch(action.type)
    {
        case CLOCKWISE:
            if(action.curr==='game')
            {
                return {...state,activeMenu:'music'}
            }
            else if(action.curr === 'music')
            {
                return {...state,activeMenu:'setting'} 
            }
            else if(action.curr === 'setting')
            {
                return {...state,activeMenu:'coverflow'} 
            }
            else if(action.curr === 'coverflow')
            {
                return {...state,activeMenu:'homepage'} 
            }
            else
            {
                return {...state,activeMenu:'game'} 
            }
        case ANTI_CLOCKWISE:
            if(action.curr==='game')
            {
                return {...state,activeMenu:'homepage'}
            }
            if(action.curr==='homepage')
            {
                return {...state,activeMenu:'coverflow'}
            }
            else if(action.curr === 'music')
            {
                return {...state,activeMenu:'game'} 
            }
            else if(action.curr === 'setting')
            {
                return {...state,activeMenu:'music'} 
            }
            else
            {
                return {...state,activeMenu:'setting'} 
            }
        case CLOCKWISE_SONG:
            if(action.curr==='song1')
            {
                return {...state,activeMenu:'music',activeSong:'song2'}
            }
            else if(action.curr === 'song2')
            {
                return {...state,activeMenu:'music',activeSong:'song3'} 
            }
            else if(action.curr === 'song3')
            {
                return {...state,activeMenu:'music',activeSong:'song4'} 
            }
            else if(action.curr === 'song4')
            {
                return {...state,activeMenu:'music',activeSong:'back'} 
            }
            else
            {
                return {...state,activeMenu:'music',activeSong:'song1'} 
            }
        case ANTICLOCKWISE_SONG:
            if(action.curr==='song1')
            {
                return {...state,activeMenu:'music',activeSong:'back'}
            }
            else if(action.curr === 'song2')
            {
                return {...state,activeMenu:'music',activeSong:'song1'} 
            }
            else if(action.curr === 'song3')
            {
                return {...state,activeMenu:'music',activeSong:'song2'} 
            }
            else if(action.curr === 'song4')
            {
                return {...state,activeMenu:'music',activeSong:'song3'} 
            }
            else
            {
                return {...state,activeMenu:'music',activeSong:'song4'} 
            }
        case MAIN_MENU:
            {
                if(state.play === '')
                {
                    return {...state,
                        homepage:false,
                        coverflow:false,
                        game:false,
                        music:false,
                        setting:false,
                        menuItems:false,
                        menu:true,
                        play:''} 
                }
                else{
                    return {...state,
                        homepage:false,
                        coverflow:false,
                        game:false,
                        music:true,
                        setting:false,
                        menuItems:false,
                        menu:false,
                        play:''} 
                }
                
            }
        case SELECT:
            if(action.curr === 'game')
            {
                return {...state,
                    homepage:false,
                    coverflow:false,
                    game:true,
                    music:false,
                    setting:false,
                    menuItems:false,
                    menu:false}
            }
            else if(action.curr === 'music')
            {
                return {...state,
                    homepage:false,
                    coverflow:false,
                    game:false,
                    music:true,
                    play:'',
                    activeSong:'song1',
                    menuItems:false,
                    setting:false,
                    menu:false}
            }
            else if(action.curr === 'setting')
            {
                return {...state,
                    homepage:false,
                    coverflow:false,
                    game:false,
                    menuItems:false,
                    music:false,
                    setting:true,
                    menu:false}
            }
            else if(action.curr === 'coverflow'){
                return {...state,
                    homepage:false,
                    coverflow:true,
                    game:false,
                    menuItems:false,
                    music:false,
                    setting:false,
                    menu:false}
            }
            else{
                return {...state,
                    homepage:true,
                    coverflow:false,
                    game:false,
                    music:false,
                    menuItems:false,
                    setting:false,
                    menu:false}
            }
        case SELECT_SONG:
            if(action.curr === 'song1')
            {
                return {...state,
                    homepage:false,
                    coverflow:false,
                    game:false,
                    music:true,
                    setting:false,
                    menuItems:false,
                    menu:false,
                    play:'song1'
                }
            }
            else if(action.curr === 'song2')
            {
                return {...state,
                    homepage:false,
                    coverflow:false,
                    game:false,
                    music:true,
                    setting:false,
                    menuItems:false,
                    menu:false,
                    play:'song2'
                }
            }
            else if(action.curr === 'song3')
            {
                return {...state,
                    homepage:false,
                    coverflow:false,
                    game:false,
                    music:true,
                    setting:false,
                    menuItems:false,
                    menu:false,
                    play:'song3'
                }
            }
            else if(action.curr === 'song4'){
                return {...state,
                    homepage:false,
                    coverflow:false,
                    game:false,
                    music:true,
                    setting:false,
                    menuItems:false,
                    menu:false,
                    play:'song4'
                }
            }
            else{
                return {...state,
                    homepage:false,
                    coverflow:false,
                    game:false,
                    music:false,
                    setting:false,
                    menuItems:false,
                    menu:true,
                    play:''
                }
            }   
        default:
            return state
    }
}