class Mouse{
	constructor(name){
		this.name = name;
	};
	run() {
		console.log(`${this.name} is running`);
	}
};

const mickey = new Mouse('mickey');
mickey.run();