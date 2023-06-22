const settingTable = document.querySelector('.setting-table');
const featuresTable = document.querySelector('.features-table');
const settingBtn = document.querySelector('.setting-btn');
const featuresBtn = document.querySelector('.features-btn');


featuresTable.style.display = 'none';
settingBtn.setAttribute('id', 'hover');
settingBtn.addEventListener('click', function(e){
    settingBtn.setAttribute('id', 'hover');
    settingTable.style.display = 'table';
    featuresTable.style.display = 'none';
    featuresBtn.removeAttribute('id', 'hover')
})

featuresBtn.addEventListener('click', function(e){
    featuresBtn.setAttribute('id', 'hover');
    settingTable.style.display = 'none';
    featuresTable.style.display = 'table';
    settingBtn.removeAttribute('id', 'hover')

})




