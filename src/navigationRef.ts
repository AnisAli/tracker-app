
import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef()

export function navigate(routeName: never, params:never) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(routeName, params);
  }
}


// import { NavigationActions, NavigationNavigateActionPayload, NavigationParams } from "react-navigation";

// let navigator:any;

// export const setNavigator = (nav: any) => {
//     navigator = nav;
// }

// export const navigate = (routeName: string, params?: NavigationParams) => {
//     navigator.dispatch(
//         NavigationActions.navigate({
//             routeName,
//             params
//         })
//     );
// };