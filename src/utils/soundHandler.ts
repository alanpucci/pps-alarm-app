import robar from '../../assets/sounds/robarelcelu.m4a';
import mano from '../../assets/sounds/saquelamano.m4a';
import maestro from '../../assets/sounds/maestro.m4a';
import mama from '../../assets/sounds/mama.m4a';


export const soundHandler = (sound:string):any => {
    switch(sound){
        case 'robar':
            return robar;
        case 'mano':
            return mano;
        case 'mama':
            return mama;
        case 'maestro':
            return maestro;
    }
}