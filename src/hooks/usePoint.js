import { onMounted, onUnmounted, reactive ,toRefs,toRef} from "vue";

export default function () {
    const point = reactive({ x: 20, y: 0 });
    const getPoint = function (event) {
        point.x = event.pageX
        point.y = event.pageY
    }
    onMounted(() => {
        window.addEventListener('click', getPoint)
    })
    onUnmounted(() => {
        window.removeEventListener('click', getPoint)
    })
    console.log(1111,toRef(point,'x').value)
    return toRefs(point)
    // return {x:toRef(point,'x'),y:toRef(point,'y')}
}
