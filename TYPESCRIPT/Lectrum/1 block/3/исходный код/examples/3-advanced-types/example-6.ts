{
    interface Bird {
        fly():void;
        name: string
    }

    interface Fish {
        swim():void;
        name: string
    }

    const getSmallPet = function(): Fish | Bird {
        return {
            name: 'oliver',
            swim() {
                console.log('swim');
            }
        }
    };

    const pet = getSmallPet();

    // if (pet.swim) {
    //     pet.swim();
    // }
}