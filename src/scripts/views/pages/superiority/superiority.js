import sidebar from "../../components/layouts/sidebar.js";
import ContentData from "../../../data/ContentData";
import navbar from "../../components/layouts/navbar";


const superiority = {
  async init() {
    this.dataAPI = new ContentData();
    this.data = await this.dataAPI.getDataQuality();
    return `
    <section class="w-1/6 sidebar">
    	${sidebar.init()}
    </section>
    <section class="w-5/6 content">
    	${navbar.init("Keunggulan")}
    <div class="w-full min-h-full bg-gray-200 flex p-[12px]">
      <div class="block p-9 mt-[35px] mx-auto rounded-md bg-white w-11/12 min-h-[610px]">
        <div class="relative mt-[20px] w-full h-[460px]">
          <table id="table_id" class="table-fixed w-full h-full text-sm">
            <thead class="text-semibold text-[15px] bg-gray-300 ">
              <tr>
                <th class="px-5 py-2">No.</th>
                <th class="px-5 py-2">ID</th>
                <th class="px-5 py-2 w-[50%] text-center">Deskripsi</th>
                <th class="px-5 py-2">Icon</th>
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
        id: e.id,
        deskripsi: e.deskripsi,
        gambar: `<img src="${e.icon}" class="w-[25px] h-[25px] object-cover">`,
        aksi: `
          <a href="#/update-superiority/${e.id}" class="w-full">
            <button class="p-2 bg-blue-500"><img alt="icon" src="icons/edit.png" class="w-[20px] h-[20px]"/></button>
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
          data: "id",
          orderable: false,
          className: "align-middle",
        },
        {
          data: "deskripsi",
          orderable: true,
          className: "align-middle",
        },
        {
          data: "gambar",
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

export default superiority;
