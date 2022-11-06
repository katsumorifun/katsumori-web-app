export default {
    mounted: el =>{
        el.src = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIj4KCTxjaXJjbGUgY2xhc3M9ImRvdCIgY3g9IjEwMCIgY3k9IjIwMCIgcj0iMzAiIC8+Cgk8Y2lyY2xlIGNsYXNzPSJkb3QiIGN4PSIyMDAiIGN5PSIyMDAiIHI9IjMwIiAvPgoJPGNpcmNsZSBjbGFzcz0iZG90IiBjeD0iMzAwIiBjeT0iMjAwIiByPSIzMCIgLz4KCTxzdHlsZT4KCQlAa2V5ZnJhbWVzIGJsaW5rIHsgNTAlIHsgZmlsbDogdHJhbnNwYXJlbnQgfX0KCgkJLmRvdCB7CgkJCWFuaW1hdGlvbjogMXMgYmxpbmsgaW5maW5pdGU7CgkJCWZpbGw6IGdyZXk7CgkJfQoJCS5kb3Q6bnRoLWNoaWxkKDIpIHsgYW5pbWF0aW9uLWRlbGF5OiAyNTBtcyB9CgkJLmRvdDpudGgtY2hpbGQoMykgeyBhbmltYXRpb24tZGVsYXk6IDUwMG1zIH0KCTwvc3R5bGU+Cjwvc3ZnPgo="
    },
    beforeMount: el =>{
        function loadImage(){
            setTimeout(()=>{
                el.src = el.dataset.src        
            }, 135)
        }

        function callback(entries, observer){
            entries.forEach(entry=>{
                if(entry.isIntersecting){
                    loadImage();
                    observer.unobserve(el)
                }
            })
        }

        function createIntersectionObserver(){
            const options = {
                root: null,
                threshold: 0,
            }

            const observer = new IntersectionObserver(callback, options)
            observer.observe(el)
        }

        if(!window['IntersectionObserver'])
            loadImage();
        else{
            createIntersectionObserver();
        }
    }
}