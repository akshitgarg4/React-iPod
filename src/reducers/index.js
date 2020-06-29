import {ANTI_CLOCKWISE,CLOCKWISE} from '../actions';
var initialState={
    activeMenu:'game',
    coverflow:false,
    game:false,
    music:false,
    setting:false,
    menu:true,
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
            else
            {
                return {...state,activeMenu:'game'} 
            }
        case ANTI_CLOCKWISE:
            if(action.curr==='game')
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
        default:
            return state
    }
}