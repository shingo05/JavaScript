'use strict'; /* 厳格にエラーをチェック */
{
    const tabs = document.querySelectorAll('.tab-name-item');
    console.log(tabs);

    tabs.forEach((tabs) => {
        tabs.addEventListener('click', tabSwitch);
    })

    function tabSwitch(e){
        const tabTargetData = e.currentTarget.dataset.name;

        const tabList = e.currentTarget.closest('.tab-name');
        console.log(tabList);
        const tabItems = tabList.querySelectorAll('.tab-name-item');
        console.log(tabItems);

        const tabExItems = tabList.nextElementSibling.querySelectorAll('.tab-ex-item');
        console.log(tabExItems);

        tabItems.forEach((tabItem) => {
            tabItem.classList.remove('is-active');
        })

        tabExItems.forEach((tabExItem) => {
            tabExItem.classList.remove('is-show');
        })

        e.currentTarget.classList.add('is-active');

        tabExItems.forEach((tabExItem) => {
            if(tabExItem.dataset.ex === tabTargetData){
                tabExItem.classList.add('is-show');
            }
        })
    }

    
}
