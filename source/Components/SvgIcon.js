import React from 'react';
import { Svg, Path, G } from 'react-native-svg';
import { StyleSheet, View } from 'react-native';

const TempleIcon = ({ color }) => {
    return (
        <View style={styles.container}>
            <Svg
                width="21"
                height="22"
                viewBox="0 0 21 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.15131 6.25617L3.63999 8.7463C6.36111 7.09633 7.96681 7.12099 8.74953 7.79546C9.1951 8.17939 9.53196 8.71287 8.82872 9.50728C8.27631 10.1313 7.24284 10.4354 4.81943 10.1703C4.90211 11.4805 5.88764 13.1354 6.24339 13.4497C10.1625 12.4005 11.1721 17.5949 7.20708 18.1818C0.327528 18.7349 1.07275 11.9023 0.30304 11.8819C-0.557492 15.1494 2.31228 19.453 2.63315 19.3756C5.07646 22.132 9.5518 21.859 10.9899 18.901C11.6529 18.2567 12.1234 15.6304 10.7791 13.2795C11.8563 13.1407 12.7903 13.4742 13.3253 13.137C15.5788 11.7167 15.5082 8.66609 17.6774 8.97069C19.3089 8.78209 19.6837 11.5438 19.3611 13.0469C19.1997 15.6795 13.8336 18.3894 13.0611 13.7949C12.3665 14.7809 12.8516 17.6789 14.1327 18.8441C15.3052 19.7747 17.6061 20.0398 19.1821 18.2875C22.2401 14.5705 20.5818 7.8118 17.3 6.97834C15.5223 6.79495 14.0139 7.15047 13.1546 8.80394C12.5469 9.75278 11.9393 10.8518 11.3316 11.6474C10.6837 12.3649 9.78026 12.3845 8.48142 11.5831C12.8464 8.85727 10.6191 1.29166 2.91006 5.66338C2.68359 5.83386 2.6833 5.81141 2.15131 6.25617Z"
                    fill={color}
                />
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.11822 1.54272C8.937 3.97158 10.9266 6.23689 12.6779 6.54666C14.9496 7.00127 17.0165 6.23213 18.882 4.59391C18.6069 3.68927 17.9284 3.17471 17.4378 2.47842C17.1384 1.93421 12.9537 7.70031 9.11822 1.54272Z"
                    fill={color}
                />
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.0237 0.0983887L15.0985 1.94944C14.425 2.66129 13.7 3.52767 13.1254 3.94288C12.4708 3.4709 11.5994 3.01373 11.193 2.13251L13.0237 0.0983887Z"
                    fill={color}
                />
            </Svg>
        </View>
    );
};

const HomeIcon = ({ color }) => {
    return (
        <View style={styles.container}>
            <Svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <Path
                    d="M9.48167 3.10439L4.13282 7.27233C3.23969 7.96699 2.51526 9.44561 2.51526 10.567V17.9204C2.51526 20.2227 4.39083 22.1082 6.69312 22.1082H18.1847C20.487 22.1082 22.3626 20.2227 22.3626 17.9303V10.7059C22.3626 9.50515 21.5588 7.96699 20.5763 7.28225L14.4435 2.98531C13.0542 2.01279 10.8214 2.06241 9.48167 3.10439Z"
                    stroke={color}
                    strokeWidth="1.48855"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <Path
                    d="M12.4389 18.1387V15.1616"
                    stroke={color}
                    strokeWidth="1.48855"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </Svg>
        </View>
    );
}
const OthersIcon = ({ color }) => {
    return (
        <View style={styles.container}>
            <Svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                <Path d="M23.5 22.9443H1.5C1.09 22.9443 0.75 22.6043 0.75 22.1943C0.75 21.7843 1.09 21.4443 1.5 21.4443H23.5C23.91 21.4443 24.25 21.7843 24.25 22.1943C24.25 22.6043 23.91 22.9443 23.5 22.9443Z" fill={color} />
                <Path d="M20.2803 22.9544C19.8703 22.9544 19.5303 22.6144 19.5303 22.2044V17.7444C19.5303 17.3344 19.8703 16.9944 20.2803 16.9944C20.6903 16.9944 21.0303 17.3344 21.0303 17.7444V22.2044C21.0303 22.6144 20.7003 22.9544 20.2803 22.9544Z" fill={color} />
                <Path d="M20.3001 18.4942C18.6701 18.4942 17.3501 17.1742 17.3501 15.5442V13.2742C17.3501 11.6442 18.6701 10.3242 20.3001 10.3242C21.9301 10.3242 23.2501 11.6442 23.2501 13.2742V15.5442C23.2501 17.1742 21.9301 18.4942 20.3001 18.4942ZM20.3001 11.8342C19.5001 11.8342 18.8501 12.4842 18.8501 13.2842V15.5542C18.8501 16.3542 19.5001 17.0042 20.3001 17.0042C21.1001 17.0042 21.7501 16.3542 21.7501 15.5542V13.2842C21.7501 12.4842 21.1001 11.8342 20.3001 11.8342Z" fill={color} />
                <Path d="M14.7998 22.9443C14.3898 22.9443 14.0498 22.6043 14.0498 22.1943V6.22437C14.0498 4.63437 13.3798 3.95435 11.8198 3.95435H5.58984C4.01984 3.95435 3.33984 4.63437 3.33984 6.22437V22.1943C3.33984 22.6043 2.99984 22.9443 2.58984 22.9443C2.17984 22.9443 1.83984 22.6043 1.83984 22.1943V6.22437C1.83984 3.79437 3.16984 2.45435 5.58984 2.45435H11.8198C14.2298 2.45435 15.5498 3.79437 15.5498 6.22437V22.1943C15.5498 22.6043 15.2098 22.9443 14.7998 22.9443Z" fill={color} />
                <Path d="M11.2498 9.19434H6.2998C5.8898 9.19434 5.5498 8.85434 5.5498 8.44434C5.5498 8.03434 5.8898 7.69434 6.2998 7.69434H11.2498C11.6598 7.69434 11.9998 8.03434 11.9998 8.44434C11.9998 8.85434 11.6598 9.19434 11.2498 9.19434Z" fill={color} />
                <Path d="M11.2498 12.9443H6.2998C5.8898 12.9443 5.5498 12.6043 5.5498 12.1943C5.5498 11.7843 5.8898 11.4443 6.2998 11.4443H11.2498C11.6598 11.4443 11.9998 11.7843 11.9998 12.1943C11.9998 12.6043 11.6598 12.9443 11.2498 12.9443Z" fill={color} />
                <Path d="M8.75 22.9443C8.34 22.9443 8 22.6043 8 22.1943V18.4443C8 18.0343 8.34 17.6943 8.75 17.6943C9.16 17.6943 9.5 18.0343 9.5 18.4443V22.1943C9.5 22.6043 9.16 22.9443 8.75 22.9443Z" fill={color} />
            </Svg>
        </View>
    )
}

const FoodIcon = ({ color }) => {
    return (
        <View style={styles.container}>
            <Svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                <Path d="M15.261 22.9443H9.86104C4.92104 22.9443 2.82104 20.8343 2.82104 15.9043V11.4143C2.82104 11.0043 3.16104 10.6643 3.57104 10.6643C3.98104 10.6643 4.32104 11.0043 4.32104 11.4143V15.9043C4.32104 19.9943 5.77104 21.4443 9.86104 21.4443H15.251C19.341 21.4443 20.791 19.9943 20.791 15.9043V11.4143C20.791 11.0043 21.131 10.6643 21.541 10.6643C21.951 10.6643 22.291 11.0043 22.291 11.4143V15.9043C22.301 20.8343 20.191 22.9443 15.261 22.9443Z" fill={color} />
                <Path d="M12.561 12.9443C11.461 12.9443 10.461 12.5143 9.75104 11.7243C9.04104 10.9343 8.71104 9.90434 8.82104 8.80434L9.49104 2.12434C9.53104 1.74434 9.85104 1.44434 10.241 1.44434H14.911C15.301 1.44434 15.621 1.73434 15.661 2.12434L16.331 8.80434C16.441 9.90434 16.111 10.9343 15.401 11.7243C14.661 12.5143 13.661 12.9443 12.561 12.9443ZM10.911 2.94434L10.311 8.95434C10.241 9.62434 10.441 10.2543 10.861 10.7143C11.711 11.6543 13.411 11.6543 14.261 10.7143C14.681 10.2443 14.881 9.61434 14.811 8.95434L14.211 2.94434H10.911Z" fill={color} />
                <Path d="M18.871 12.9443C16.841 12.9443 15.031 11.3043 14.821 9.28434L14.121 2.27434C14.101 2.06434 14.171 1.85434 14.311 1.69434C14.451 1.53434 14.651 1.44434 14.871 1.44434H17.921C20.861 1.44434 22.231 2.67434 22.641 5.69434L22.921 8.47434C23.041 9.65434 22.681 10.7743 21.911 11.6243C21.141 12.4743 20.061 12.9443 18.871 12.9443ZM15.701 2.94434L16.321 9.13434C16.451 10.3843 17.611 11.4443 18.871 11.4443C19.631 11.4443 20.311 11.1543 20.801 10.6243C21.281 10.0943 21.501 9.38434 21.431 8.62434L21.151 5.87434C20.841 3.61434 20.111 2.94434 17.921 2.94434H15.701Z" fill={color} />
                <Path d="M6.20106 12.9443C5.01106 12.9443 3.93106 12.4743 3.16106 11.6243C2.39106 10.7743 2.03106 9.65434 2.15106 8.47434L2.42106 5.72434C2.84106 2.67434 4.21106 1.44434 7.15106 1.44434H10.2011C10.4111 1.44434 10.6111 1.53434 10.7611 1.69434C10.9111 1.85434 10.9711 2.06434 10.9511 2.27434L10.2511 9.28434C10.0411 11.3043 8.23106 12.9443 6.20106 12.9443ZM7.15106 2.94434C4.96106 2.94434 4.23106 3.60434 3.91106 5.89434L3.64106 8.62434C3.56106 9.38434 3.79106 10.0943 4.27106 10.6243C4.75106 11.1543 5.43106 11.4443 6.20106 11.4443C7.46106 11.4443 8.63106 10.3843 8.75106 9.13434L9.37106 2.94434H7.15106Z" fill={color} />
                <Path d="M15.061 22.9443H10.061C9.65104 22.9443 9.31104 22.6043 9.31104 22.1943V19.6943C9.31104 17.5943 10.461 16.4443 12.561 16.4443C14.661 16.4443 15.811 17.5943 15.811 19.6943V22.1943C15.811 22.6043 15.471 22.9443 15.061 22.9443ZM10.811 21.4443H14.311V19.6943C14.311 18.4343 13.821 17.9443 12.561 17.9443C11.301 17.9443 10.811 18.4343 10.811 19.6943V21.4443Z" fill={color} />
            </Svg>
        </View>
    )
}

const TouristTemple = ({ color }) => {
    return (
        <View style={styles.container}>
            <Svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <Path d="M14.6666 14.1667H1.33331C1.05998 14.1667 0.833313 14.3934 0.833313 14.6667C0.833313 14.9401 1.05998 15.1667 1.33331 15.1667H14.6666C14.94 15.1667 15.1666 14.9401 15.1666 14.6667C15.1666 14.3934 14.94 14.1667 14.6666 14.1667Z" fill={color} />
                <Path d="M11.3333 1.33325H4.66667C2.66667 1.33325 2 2.52659 2 3.99992V14.6666H6V10.6266C6 10.2799 6.28 9.99992 6.62667 9.99992H9.38C9.72 9.99992 10.0067 10.2799 10.0067 10.6266V14.6666H14.0067V3.99992C14 2.52659 13.3333 1.33325 11.3333 1.33325ZM9.66667 6.16659H8.5V7.33325C8.5 7.60659 8.27333 7.83325 8 7.83325C7.72667 7.83325 7.5 7.60659 7.5 7.33325V6.16659H6.33333C6.06 6.16659 5.83333 5.93992 5.83333 5.66659C5.83333 5.39325 6.06 5.16659 6.33333 5.16659H7.5V3.99992C7.5 3.72659 7.72667 3.49992 8 3.49992C8.27333 3.49992 8.5 3.72659 8.5 3.99992V5.16659H9.66667C9.94 5.16659 10.1667 5.39325 10.1667 5.66659C10.1667 5.93992 9.94 6.16659 9.66667 6.16659Z" fill={color} />
            </Svg>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});


export { TempleIcon, HomeIcon, OthersIcon, FoodIcon, TouristTemple };
