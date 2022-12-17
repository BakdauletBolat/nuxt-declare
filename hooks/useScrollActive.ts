const headerHeight = 100;
const defaultOffset = 550;
let lastScroll = 0;

const scrollPostion = () => window.pageYOffset || document.documentElement.scrollTop;

const useScrollActive = (changeIsActive:any,changeIsHide:any,isActive:boolean,isHide:boolean) => {

        if (scrollPostion() > headerHeight && isActive == false) {
            changeIsActive(true);
        }
        else if (scrollPostion() < headerHeight && isActive == true) {
            changeIsActive(false);
        }

        if (scrollPostion() > lastScroll && isHide == false && scrollPostion()>defaultOffset) {
            changeIsHide(true);
        }
        else if (scrollPostion() < lastScroll && isHide == true) {
            changeIsHide(false);
        }
        lastScroll = scrollPostion();
}

export default useScrollActive;

