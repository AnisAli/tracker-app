import { Accuracy, requestForegroundPermissionsAsync, watchPositionAsync } from "expo-location";
import { useEffect, useState } from "react";


export default (callback: any) => {
    const [err, setErr] =  useState(null);

    const startWatching = async ()=>{
        try{
            const { granted} = await requestForegroundPermissionsAsync();
            if (!granted){
                throw new Error('Location permission not grated');
            }
            await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10
            }, (location)=> {
                console.log(location);
                if (callback){
                    callback(location);
                }
            })

        } catch(e:any) {
            setErr(e);
        }
    }
    
    useEffect(()=>{
        startWatching();
    }, []);
    return [err]
}