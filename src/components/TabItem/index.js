import './index.css';




const TabItem = (props) => {
    const {tab,onTabClick,isActive} = props;
    const {tabName,tabId} = tab;

    const onClickTab = () =>{
        onTabClick(tabId,tabName);
    }
    const btn = isActive?'active-btn':'btn';

    return(
        <button className={btn} onClick={onClickTab}>{tabName}</button>
    )
}

export default TabItem;