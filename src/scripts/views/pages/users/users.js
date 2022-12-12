import sidebar from "../../components/layouts/sidebar.js";
import ContentData from "../../../data/ContentData";
import navbar from "../../components/layouts/navbar";


const users = {
  async init() {
    this.dataAPI = new ContentData();
    this.data = await this.dataAPI.getDataUserAdmin();
    return `
    <section class="w-1/6 sidebar">
    	${sidebar.init()}
    </section>
    <section class="w-5/6 content">
    	${navbar.init("Users Admin")}
    <div class="w-full min-h-full bg-gray-200 flex p-[12px]">
      <div class="block p-9 mt-[35px] mx-auto rounded-md bg-white w-11/12 min-h-[610px]">
        <div class="flex">
          <a href="#/create-users" class="text-white text-semibold text-[13px] bg-green-500 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-md text-sm px-3 py-2 text-center inline-flex items-center mr-2">
            <i class="fa-solid fa-circle-plus py-1 mr-[5px] w-[20px] h-[20px]"></i> Admin
          </a>
        </div>
        <div class="relative mt-[20px] w-full h-[460px]">
          <table id="table_id" class="table-fixed w-full h-full text-sm">
            <thead class="text-semibold text-[15px] bg-gray-300 ">
              <tr>
                <th class="px-5 py-2">No.</th>
                <th class="px-5 py-2 text-center">Username</th>
                <th class="px-5 py-2">Password</th>
                <th class="px-5 py-2 mx-auto">Aksi</th>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
        </div>
      </div>
    </div>
		`;
  },
  customData(data) {
    let dataCustom = [];
    let index = 1;
    data.forEach((e) => {
      dataCustom.push({
        no: index,
        username: e.username,
        password: e.password,
        aksi: `
          <a href="#/update-users/${e.id}" class="${e.type == "superadmin" ? "hidden" : ""}">
            <button class="p-2 bg-blue-500"><img alt="icon" src="icons/edit.png" class="w-[20px] h-[20px]"/></button>
          </a>
          <a href="#/delete-users/${e.id}" class="${e.type == "superadmin" ? "hidden" : ""}">
            <button class="delete p-2 bg-red-500" data-primary-key="${e.id}"><img alt="icon" src="icons/hapus.png" class="w-[20px] h-[20px]"/></button>
          </a>
          `,
      });
      index++;
    });
    return dataCustom;
  },
  async showTables(data) {
    $("#table_id").DataTable({
      responsive: true,
      pagingType: "simple_numbers",
      autoWidth: false,
      pageLength: 10,
      lengthMenu: [10, 20, 30, 40],
      processing: true,
      language: {
        processing:
          '<div class="d-flex justify-content-center"><div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div></div>',
      },
      serverSide: false,
      searching: true,
      data: data,
      columnDefs: [
        {
          targets: ["_all"],
          className: "mdc-data-table__cell",
        },
      ],
      columns: [
        {
          data: "no",
          orderable: false,
          className: "align-middle",
        },
        {
          data: "username",
          orderable: true,
          className: "align-middle",
        },
        {
          data: "password",
          orderable: false,
          className: "align-middle",
        },
        {
          data: "aksi",
          orderable: false,
          className: "align-middle mx-auto",
        },
      ],
    });
  },
  async afterRender() {
    await this.showTables(this.customData(this.data))
    sidebar.afterRender();
  },
};

export default users;
