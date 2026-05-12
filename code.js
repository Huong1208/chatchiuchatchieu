<script>
    document.addEventListener("DOMContentLoaded", function() {
        const textParts = document.querySelectorAll('.text-part');
        const colors = ['#ffec85', '#ffffff'];

        textParts.forEach(part => {
            // Ngẫu nhiên chọn 0 hoặc 1 để đảo vị trí màu
            const coinFlip = Math.floor(Math.random() * 2);
            if (coinFlip === 0) {
                part.style.background = `linear-gradient(to right, ${colors[0]}, ${colors[1]})`;
            } else {
                part.style.background = `linear-gradient(to right, ${colors[1]}, ${colors[0]})`;
            }
        });
    });
    document.addEventListener("DOMContentLoaded", function() {
    
    // Tạo bộ quan sát (Observer)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Nếu phần tử bắt đầu xuất hiện trong màn hình
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, {
        threshold: 0.1 // Hiện ra 10% là bắt đầu chạy hiệu ứng
    });

    // Tìm tất cả các phần tử muốn làm hiệu ứng reveal
    const revealElements = document.querySelectorAll(".reveal");
    
    // Bắt đầu theo dõi từng phần tử
    revealElements.forEach(el => observer.observe(el));
});
</script>
