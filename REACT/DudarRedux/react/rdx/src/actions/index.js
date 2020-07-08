//NOTE/: ACTION CREATOR
export const select = car => {
    console.log(car);
    console.log(`Now car selected is : ${car.name} `);
    return {
        type: "CAR_SELECTED",
        payload: car
    };
};
