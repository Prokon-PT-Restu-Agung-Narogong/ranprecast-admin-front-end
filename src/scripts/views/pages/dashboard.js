import sidebar from '../components/layouts/sidebar.js';
import { Chart } from 'chart.js/auto'
import ContentData from '../../data/ContentData';
const dashboard = {
  async init() {
    this.dataAPI = new ContentData();
    this.dateFrom = new Date();
    this.dateFrom.setMonth(this.dateFrom.getMonth()-6);
    this.dateTo = new Date();
    this.filterBy = 'date';
    return `
    <section class="w-1/6 sidebar">
    	${sidebar.init()}
    </section>
    <section class="w-5/6 content">
    	<div class="w-full h-[84px] flex">
    		<h1 class="my-auto ml-[24px] text-[24px] font-[600] font-primary">Dashboard</h1>
    	</div>
      <section class="flex">
        <ul class="flex">
          <li class="by-dates mx-[15px] bgcolor-primary px-6 text-white font-primary cursor-pointer">Hari</li>
          <li class="by-months mx-[15px] bgcolor-primary px-6 text-white font-primary cursor-pointer">Bulan</li>
          <li class="by-years mx-[15px] bgcolor-primary px-6 text-white font-primary cursor-pointer">Tahun</li>
        </ul>
        <div class=" ml-auto flex">
          <input type="date" id="dateFrom" class="mx-4 border-2 border-red-600 rounded-2">
          <p class="text-[14px] font-primary color-primary">Sampai</p> 
          <input type="date" id="dateTo" class="mx-4 border-2 border-red-600 rounded-2">
        </div>
      </section>
      <section class="w-full mt-[40px] px-4 ">
        <h3 class="mb-[20px] text-center font-primary color-primary font-[500] text-[20px]">Pengunjung Website Ranprecast.com</h3>
        <div class="flex w-full chartVisitors justify-between">
          <canvas id="chartVisitors" class="max-w-[100%] max-h-[400px]" height="400"></canvas>
        </div>
      </section>

      <section class="w-full mt-[40px] px-4 ">
        <h3 class="mb-[20px] text-center font-primary color-primary font-[500] text-[20px]">Lokasi Pengunjung</h3>
        <div class="flex w-full chartLocation justify-between">
          <canvas id="chartRegion" class="max-w-[45%] max-h-[400px]" height="400"></canvas>
          <canvas id="chartCity" class="max-w-[45%] max-h-[400px]" height="400"></canvas>
        </div>
      </section>

      <section class="w-full mt-[40px]">
        <h3 class="mb-[20px] text-center font-primary color-primary font-[500] text-[20px]">Search Engine & ISP</h3>
        <div class="w-full flex mt-4 justify-between chartBrowserISP">
          <canvas id="chartUsingBrowser" class="max-w-[50%] max-h-[300px]" width="300" height="400"></canvas>
          <canvas id="chartUsingISP" class="max-w-[50%] max-h-[300px]" width="300" height="400"></canvas>
        </div>
      </section>
    </section>
		`;
  },
  async filterDashboard({dateFrom,dateTo, filterBy}){
    await this.dataAPI.getDataVisitors().then((res)=>{
      let dataFilter = res.filter((e)=>{
        const dateData = new Date(e.date)
        const queryDateFrom = new Date(dateFrom)
        const queryDateTo = new Date(dateTo)
        return dateData >= queryDateFrom && dateData <= queryDateTo
      });
      this.filterByDate = ()=>{
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var totalByDay = [{
          'day' : 'Sunday',
          'views' : 0,
          },{
          'day' : 'Monday',
          'views' : 0,
          },{
          'day' : 'Tuesday',
          'views' : 0,
          },{
          'day' : 'Wednesday',
          'views' : 0,
          },{
          'day' : 'Thursday',
          'views' : 0,
          },{
          'day' : 'Friday',
          'views' : 0,
          },{
          'day' : 'Saturday',
          'views' : 0,
          }];

        dataFilter.forEach((e)=>{
          let d = new Date(e.date)
          days[d.getDay()] == 'Sunday' ? totalByDay[0]['views']++ : '';
          days[d.getDay()] == 'Monday' ? totalByDay[1]['views']++ : '';
          days[d.getDay()] == 'Tuesday' ? totalByDay[2]['views']++ : '';
          days[d.getDay()] == 'Wednesday' ? totalByDay[3]['views']++ : '';
          days[d.getDay()] == 'Thursday' ? totalByDay[4]['views']++ : '';
          days[d.getDay()] == 'Friday' ? totalByDay[5]['views']++ : '';
          days[d.getDay()] == 'Saturday' ? totalByDay[6]['views']++ : '';;
        })
        return totalByDay;
      }


      this.filterByMonth = ()=>{
        let days = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let totalByMonth = [{
          'day' : 'January',
          'views' : 0,
          },{
          'day' : 'February',
          'views' : 0,
          },{
          'day' : 'March',
          'views' : 0,
          },{
          'day' : 'April',
          'views' : 0,
          },{
          'day' : 'May',
          'views' : 0,
          },{
          'day' : 'June',
          'views' : 0,
          },{
          'day' : 'July',
          'views' : 0,
          },{
          'day' : 'August',
          'views' : 0,
          },{
          'day' : 'September',
          'views' : 0,
          },{
          'day' : 'October',
          'views' : 0,
          },{
          'day' : 'November',
          'views' : 0,
          },{
          'day' : 'December',
          'views' : 0,
          }];

        dataFilter.forEach((e)=>{
          let d = new Date(e.date)
          days[d.getMonth()] == days[0] ? totalByMonth[0]['views']++ : '';
          days[d.getMonth()] == days[1] ? totalByMonth[1]['views']++ : '';
          days[d.getMonth()] == days[2] ? totalByMonth[2]['views']++ : '';
          days[d.getMonth()] == days[3] ? totalByMonth[3]['views']++ : '';
          days[d.getMonth()] == days[4] ? totalByMonth[4]['views']++ : '';
          days[d.getMonth()] == days[5] ? totalByMonth[5]['views']++ : '';
          days[d.getMonth()] == days[6] ? totalByMonth[6]['views']++ : '';
          days[d.getMonth()] == days[7] ? totalByMonth[7]['views']++ : '';
          days[d.getMonth()] == days[8] ? totalByMonth[8]['views']++ : '';
          days[d.getMonth()] == days[9] ? totalByMonth[9]['views']++ : '';
          days[d.getMonth()] == days[10] ? totalByMonth[10]['views']++ : '';
          days[d.getMonth()] == days[11] ? totalByMonth[11]['views']++ : '';
        })
        return totalByMonth;
      }

      this.filterByYears = ()=>{
        let data = []
        dataFilter.reduce((group,item) => {
          const { date } = item;
          const year = new Date(date).getFullYear().toString();
          data[year] = data[year] ?? [];
          data[year].push(item);
        }, {});
        return data;
      }

      this.filterByBrowser = ()=>{
        let data = []
        dataFilter.reduce((group,item) => {
          const { browser } = item;
          data[browser] = data[browser] ?? [];
          data[browser].push(item);
        }, {});
        return data;
      }

      this.filterByISP = ()=>{
        let data = []
        dataFilter.reduce((group,item) => {
          const { isp } = item;
          data[isp] = data[isp] ?? [];
          data[isp].push(item);
        }, {});
        return data;
      }

      this.filterByRegion= ()=>{
        let data = []
        dataFilter.reduce((group,item) => {
          const { region } = item;
          data[region] = data[region] ?? [];
          data[region].push(item);
        }, {});
        return data;
      }

      this.filterByCity= ()=>{
        let data = []
        dataFilter.reduce((group,item) => {
          const { city } = item;
          data[city] = data[city] ?? [];
          data[city].push(item);
        }, {});
        return data;
      }
    });


    if(filterBy.toUpperCase() == 'Date'.toUpperCase()){
      return this.filterByDate();
    }else if(filterBy.toUpperCase() == 'Month'.toUpperCase()){
       return this.filterByMonth();
    }else if(filterBy.toUpperCase() == 'Year'.toUpperCase()){
       return this.filterByYears();
    }else if(filterBy.toUpperCase() == 'Browser'.toUpperCase()){
       return this.filterByBrowser();
    }else if(filterBy.toUpperCase() == 'isp'.toUpperCase()){
       return this.filterByISP();
    }else if(filterBy.toUpperCase() == 'region'.toUpperCase()){
       return this.filterByRegion();
    }else if(filterBy.toUpperCase() == 'city'.toUpperCase()){
       return this.filterByCity();
    }
  },
  async chartCity(dataReal){
    let dataLength = [];
    Object.values(dataReal).forEach((e)=>{
        dataLength.push(
          e.length
        )
    })

    return new Chart(
      $('#chartCity'),
      {
      type: 'bar',
      
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      },
      data: {
        labels: Object.keys(dataReal),
        datasets: [{
          label: 'Kota Pengguna',
          data: dataLength,
          fill: false,
          tension: 0.2
        }]
      }
    })
  },
  async chartRegion(dataReal){
    let dataLength = [];
    Object.values(dataReal).forEach((e)=>{
        dataLength.push(
          e.length
        )
    })

    return new Chart(
      $('#chartRegion'),
      {
      type: 'bar',
      options: {
        animations: {
          tension: {
            duration: 1000,
            easing: 'easeInExpo',
            from: 0.8,
            to: 0.3,
            loop: true
          }
        }
      },
      data: {
        labels: Object.keys(dataReal),
        datasets: [{
          label: 'Negara Pengguna',
          data: dataLength,
          fill: false,
          tension: 0.2
        }]
      }
    })
  },
  async chartUsingISP(dataReal){
    let dataLength = [];
    Object.values(dataReal).forEach((e)=>{
        dataLength.push(
          e.length
        )
    })

    return new Chart(
      $('#chartUsingISP'),
      {
      type: 'polarArea',
      options: {
        animations: {
          tension: {
            duration: 1000,
            easing: 'easeInExpo',
            from: 0.8,
            to: 0.3,
            loop: true
          }
        }
      },
      data: {
        labels: Object.keys(dataReal),
        datasets: [{
          data: dataLength,
          fill: false,
          tension: 0.2
        }]
      }
    })
  },
  async chartUsingBrowser(dataReal){
    let dataLength = [];
    Object.values(dataReal).forEach((e)=>{
        dataLength.push(
          e.length
        )
    })

    return new Chart(
      $('#chartUsingBrowser'),
      {
      type: 'polarArea',
      options: {
        animations: {
          tension: {
            duration: 1000,
            easing: 'easeInExpo',
            from: 0.8,
            to: 0.3,
            loop: true
          }
        }
      },
      data: {
        labels: Object.keys(dataReal),
        datasets: [{
          data: dataLength,
          fill: false,
          tension: 0.2
        }]
      }
    })
  },
  async chartVisitorsByDayProses(dataReal){
    return new Chart(
      $('#chartVisitors'),
      {
      type: 'line',
      options: {
        animations: {
          tension: {
            duration: 1000,
            easing: 'easeInExpo',
            from: 0.8,
            to: 0.3,
            loop: true
          }
        }
      },
      data: {
        labels: dataReal.map((e)=> e.day),
        datasets: [{
          label: 'Data Per Hari',
          data: dataReal.map((e)=> e.views),
          fill: true,
          tension: 0.1
        }]
      }
    })
  },
  async chartVisitorsByMonthProses(dataReal){
    return new Chart(
      $('#chartVisitors'),
      {
      type: 'line',
      options: {
        animations: {
          tension: {
            duration: 1000,
            easing: 'easeInExpo',
            from: 0.8,
            to: 0.3,
            loop: true
          }
        }
      },
      data: {
        labels: dataReal.map((e)=> e.day),
        datasets: [{
          label: 'Data Per Bulan',
          data: dataReal.map((e)=> e.views),
          fill: true,
          tension: 0.1
        }]
      }
    })
  },
  async chartVisitorsByYearProses(dataReal){
    let dataLengthYears = [];
    dataReal.forEach((e)=>{
        dataLengthYears.push(
          e.length
        )
    })

    return new Chart(
      $('#chartVisitors'),
      {
      type: 'line',
      options: {
        animations: {
          tension: {
            duration: 1000,
            easing: 'easeInExpo',
            from: 0.8,
            to: 0.3,
            loop: true
          }
        }
      },
      data: {
        labels: Object.keys(dataReal),
        datasets: [{
          label: 'Data Per Tahun',
          data: dataLengthYears ,
          fill: true,
          tension: 0.1
        }]
      }
    })
  },
  async chartVisitorsCall({dateFrom, dateTo, filterBy}){
    let dataDayFilter = await this.filterDashboard({
      dateFrom : dateFrom,
      dateTo : dateTo,
      filterBy : filterBy
    });


    if(filterBy.toUpperCase() == 'Date'.toUpperCase()){
      await this.chartVisitorsByDayProses(dataDayFilter);
    }else if(filterBy.toUpperCase() == 'Month'.toUpperCase()){
      await this.chartVisitorsByMonthProses(dataDayFilter);
    }else if(filterBy.toUpperCase() == 'Year'.toUpperCase()){
      await this.chartVisitorsByYearProses(dataDayFilter);
    }

    let dataBrowserFilter = await this.filterDashboard({
      dateFrom : dateFrom,
      dateTo : dateTo,
      filterBy : 'browser'
    });
    this.chartUsingBrowser(dataBrowserFilter)

    let dataISPFilter = await this.filterDashboard({
      dateFrom : dateFrom,
      dateTo : dateTo,
      filterBy : 'isp'
    });

    this.chartUsingISP(dataISPFilter)

    let dataRegionFilter = await this.filterDashboard({
      dateFrom : dateFrom,
      dateTo : dateTo,
      filterBy : 'region'
    });

    this.chartRegion(dataRegionFilter)

    let dataCityFilter = await this.filterDashboard({
      dateFrom : dateFrom,
      dateTo : dateTo,
      filterBy : 'city'
    });

    this.chartCity(dataCityFilter)
  },
  async eventOnClickVisitors(){
    $('.by-dates').on('click',async ()=>{
      this.filterBy = 'date';
      this.refreshCanva()
      await this.chartVisitorsCall({
        dateFrom : this.dateFrom,
        dateTo : this.dateTo,
        filterBy: 'date'
      });
    })
    $('.by-months').on('click',async ()=>{
      this.filterBy = 'month';
      this.refreshCanva()
      await this.chartVisitorsCall({
        dateFrom : this.dateFrom,
        dateTo : this.dateTo,
        filterBy: 'Month'
      });
    })
    $('.by-years').on('click',async ()=>{
      this.filterBy = 'year';
      this.refreshCanva()
      await this.chartVisitorsCall({
        dateFrom : '2020-01-01',
        dateTo : this.dateTo,
        filterBy: 'Year'
      });
    })
  },
  async dateButtonEvent(){
    $('#dateFrom').val(this.dateFrom.toISOString().substring(0,10));
    this.dateTo = new Date();
    $('#dateTo').val(this.dateTo.toISOString().substring(0,10));
    $('#dateFrom').on('change',async()=>{
      this.dateFrom = $('#dateFrom').val();
      this.refreshCanva();
      await this.chartVisitorsCall({
        dateFrom : this.dateFrom,
        dateTo : this.dateTo,
        filterBy: this.filterBy
      });
    })

    $('#dateTo').on('change',async()=>{
      this.dateTo = $('#dateTo').val();
      this.refreshCanva();
      await this.chartVisitorsCall({
        dateFrom : this.dateFrom,
        dateTo : this.dateTo,
        filterBy: this.filterBy
      });
    })

  },
  async refreshCanva(){
      $('.chartVisitors #chartVisitors').remove()
      await $('.chartVisitors').append('<canvas id="chartVisitors" class="max-w-[100%] max-h-[400px]" height="400"></canvas>')

      $('.chartLocation #chartRegion').remove()
      $('.chartLocation #chartCity').remove()
      await $('.chartLocation').append('<canvas id="chartRegion" class="max-w-[45%] max-h-[400px]" height="400"></canvas>')
      await $('.chartLocation').append('<canvas id="chartCity" class="max-w-[45%] max-h-[400px]" height="400"></canvas>')

      $('.chartBrowserISP #chartUsingBrowser').remove()
      $('.chartBrowserISP #chartUsingISP').remove()
      await $('.chartBrowserISP').append('<canvas id="chartUsingBrowser" class="max-w-[50%] max-h-[300px]" width="300" height="400"></canvas>')
      await $('.chartBrowserISP').append('<canvas id="chartUsingISP" class="max-w-[50%] max-h-[300px]" width="300" height="400"></canvas>')
  },
  async afterRender() {
   await this.chartVisitorsCall({
      dateFrom : this.dateFrom,
      dateTo : this.dateTo,
      filterBy: this.filterBy
    });
    sidebar.afterRender();
    await this.eventOnClickVisitors()
    await this.dateButtonEvent();
  },
};

export default dashboard;
