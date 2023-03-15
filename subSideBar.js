const makeSubSideBar = (data, categoryNumber) => {
  console.log(data);
  const [title, list] = data;

  let str = `<div class="sidebar__menu right ${categoryNumber}">
  <div class="sidebar__shopping right>
    <div class="sidebar__shopping__menu">
      <a href="" class="sidebar__contents btn close-right-menu" onclick="return false;">
        <img src="asset/leftdir.svg" alt="">
        주메뉴
      </a>
      <div class="sidebar__digital-content__title">${title}</div>`;

  list.forEach(element => {
    const tag = `<a href="" class="sidebar__contents shopping__electron">${element}</a>`
    str += tag;
  });

  str += `</div>
  </div>
  </div>`

  return str;
}


