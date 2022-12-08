import sidebar from '../../components/layouts/sidebar.js';
import dt from 'datatables.net';
import ContentData from '../../../data/ContentData';
const protofolio = {
  async init() {
    const dataAPI = new ContentData();
    this.data = await dataAPI.getDataPortofolio();
    return `
    <section class="w-1/6 sidebar">
    	${sidebar.init()}
    </section>
    <section class="w-5/6 content">
    	<div class="w-full h-[84px] flex">
    		<h1 class="my-auto ml-[24px] text-[24px] font-[600] font-primary basis-3/4">Portofolio</h1>
    		<p class="my-auto mr-[24px] text-[16px] text-right font-[600] font-primary basis-1/4">Hello, Adminxx</p>
    	</div>
    </div>
    <div class="w-full min-h-full bg-gray-200 flex p-[12px]">
      <div class="block p-9 mt-[35px] mx-auto rounded-md bg-white w-11/12 min-h-[610px]">
        <div class="flex">
          <a href="#/create-portofolio" class="text-white text-semibold text-[13px] bg-green-500 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-md text-sm px-3 py-2 text-center inline-flex items-center mr-2">
            <i class="fa-solid fa-circle-plus py-1 mr-[5px] w-[20px] h-[20px]"></i> Portofolio
          </a>
        </div>
        <div class="relative mt-[20px] w-full h-[460px]">
          <table id="table_id" class="table-fixed w-full h-full text-sm text-center">
            <thead class="text-semibold text-[15px] bg-gray-300 ">
              <tr>
                <th class="px-5 py-2 w-[5%]">No.</th>
                <th class="px-5 py-2 w-[5%]">ID</th>
                <th class="px-5 py-2 w-[60%]">Deskripsi</th>
                <th class="px-5 py-2 w-[10%]">Gambar</th>
                <th class="px-5 py-2 w-[20%]">Aksi</th>
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
  customData(data){
      let dataCustom = [];
      let index = 1;
      data.forEach((e)=>{
        dataCustom.push({
          no : index,
          id : e.id,
          deskripsi : e.deskripsi,
          gambar : `<img src="${e.img}" class="w-[100px] h-[100px] object-cover">`,
          aksi : `
          <a href="#/update-portofolio/${e.id}">
            <button class="p-2 bg-blue-500"><img alt="icon" src="icons/edit.png" class="w-[20px] h-[20px]"/></button>
          </a>
          <button class="p-2 bg-red-500"><img alt="icon" src="icons/hapus.png" class="w-[20px] h-[20px]"/></button>
          `

        })
        index++;
      })
      return dataCustom;
  },
  async showTables(data){
    $('#table_id').DataTable({
        "responsive": true,
        "pagingType": "simple_numbers",
        "autoWidth": false,
        'pageLength': 5,
        "lengthMenu": [5, 10, 15, 20],
        "processing": true,
        "language": {
            "processing": '<div class="d-flex justify-content-center"><div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div></div>'
        },
        "serverSide": false,
        "searching": true,
        "data" : data,
        "columnDefs": [
            {
                targets: ['_all'],
                className: 'mdc-data-table__cell',
            },
        ],
        "columns": [
            {
                "data": "no",
                "orderable": false,
                "className": "align-middle"
            },
            {
                "data": "id",
                "orderable": false,
                "className": "align-middle"
            },
            {
                "data": "deskripsi",
                "orderable": true,
                "className": "align-middle"
            },
            {
                "data": "gambar",
                "orderable": false,
                "className": "align-middle"
            },
            {
                "data": "aksi",
                "orderable": false,
                "className": "align-middle"
            }
        ]
    })
  },
  async afterRender() {
    await this.showTables(this.customData(this.data))
  	sidebar.afterRender();
  },
};

export default protofolio;
