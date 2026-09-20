console.log('heelow world');

function stopWatch() {
    let startTime, endTime, running, duration = 0;

    this.start = function() {
        if(running) 
            throw new Error('stop watch is running');
        running = true;
        startTime = new Date();

    };

    this.end = function() {
        if(!running)
            throw new Error('start the watch')
        running = false;
        endTime = new Date()

        const seaconds = (endTime.getTime() - startTime.getTime())/1000;
        duration +=seaconds
    }

    this.reset = fucntion() {
        startTime = null;
        endTime= null;
        running = false;
        duration = 0; 
    }

    Object.defineProperty(this, 'duration', {
        get: function() {return duration;}
    });





}