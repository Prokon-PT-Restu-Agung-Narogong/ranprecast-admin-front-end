import sidebar from '../components/layouts/sidebar.js';

const profile = {
  async init() {
    return `
    <section class="w-1/6 sidebar">
    	${sidebar.init()}
    </section>
    <section class="w-5/6 content">
    	<div class="w-full h-[84px] flex">
    		<h1 class="my-auto ml-[24px] text-[24px] font-[600] font-primary">Profil</h1>
    	</div>
    </div>
		`;
  },
  async afterRender() {
  	sidebar.afterRender();
  },
};

export default profile;
