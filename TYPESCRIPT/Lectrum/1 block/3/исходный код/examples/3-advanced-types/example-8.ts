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

    const isFish = function(pet: Fish | Bird): pet is Fish {
        return (<Fish>pet).swim !== void 0;
    };

    const pet = getSmallPet();

    if (isFish(pet)) {
        pet.swim();
    }
}