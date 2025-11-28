import mitt from 'mitt';
const emitter = mitt();
export default emitter;
export const eventBus = {
    on: (event: any, callback: any) => {
        emitter.on(event, callback);
    },
    off: (event: any, callback: any) => {
        emitter.off(event, callback);
    },
    emit: (event: any, data : any) => {
        emitter.emit(event, data);
    }
};