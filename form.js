// scripts.js
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    const memberNumber = document.getElementById('member_number').value;
    const companyName = document.getElementById('company_name').value;
    const name = document.getElementById('name').value;
    const attribute = document.querySelector('input[name="attribute"]:checked').value;

    // バリデーションおよびデータベースとの照合ロジックをここに追加

    // 成功時はページ遷移
    window.location.href = 'success.html';
});
