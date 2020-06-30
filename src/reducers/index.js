import {ANTI_CLOCKWISE,CLOCKWISE,MAIN_MENU,SELECT} from '../actions';

//initial state of store
var initialState={
    activeMenu:'game',
    homepage:true,
    coverflow:false,
    game:false,
    music:false,
    setting:false,
    menu:false,
    menuItems:['game','music','setting','coverflow']
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
        case MAIN_MENU:
            {
                return {...state,
                    homepage:false,
                    coverflow:false,
                    game:false,
                    music:false,
                    setting:false,
                    menu:true} 
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
                    menu:false}
            }
            else if(action.curr === 'music')
            {
                return {...state,
                    homepage:false,
                    coverflow:false,
                    game:false,
                    music:true,
                    setting:false,
                    menu:false}
            }
            else if(action.curr === 'setting')
            {
                return {...state,
                    homepage:false,
                    coverflow:false,
                    game:false,
                    music:false,
                    setting:true,
                    menu:false}
            }
            else if(action.curr === 'coverflow'){
                return {...state,
                    homepage:false,
                    coverflow:true,
                    game:false,
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
                    setting:false,
                    menu:false}
            }
            
        default:
            return state
    }
}