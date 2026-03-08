import React from 'react';

const CartPage = () => {
  // Mock data sederhana
  const cartItems = [
    { id: 1, name: "Kopi Solok Radjo - Natural", price: 125000, qty: 1, image: "https://via.placeholder.com/80" },
    { id: 2, name: "Kopi Gunung Talang - Honey Process", price: 140000, qty: 2, image: "https://via.placeholder.com/80" },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);

  return (
    <div className="min-h-screen bg-[#FDFCFB] p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-serif text-[#0A1812] mb-8">Keranjang Belanja</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Daftar Produk */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-[#0A1812]/5">
                <img src={item.image} alt={item.name} className="w-20 h-20 rounded-lg object-cover" />
                <div className="flex-1">
                  <h3 className="font-semibold text-[#0A1812]">{item.name}</h3>
                  <p className="text-sm text-[#0A1812]/60">Rp {item.price.toLocaleString('id-ID')}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <button className="px-2 py-0.5 border rounded border-gray-300">-</button>
                    <span className="text-sm font-medium">{item.qty}</span>
                    <button className="px-2 py-0.5 border rounded border-gray-300">+</button>
                  </div>
                </div>
                <button className="text-red-500 text-sm font-medium hover:underline">Hapus</button>
              </div>
            ))}
          </div>

          {/* Ringkasan Pesanan */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-[#0A1812]/5 h-fit">
            <h2 className="text-xl font-semibold mb-4 text-[#0A1812]">Ringkasan</h2>
            <div className="space-y-3 border-b border-gray-100 pb-4 mb-4">
              <div className="flex justify-between text-[#0A1812]/70">
                <span>Subtotal</span>
                <span>Rp {subtotal.toLocaleString('id-ID')}</span>
              </div>
              <div className="flex justify-between text-[#0A1812]/70">
                <span>Pengiriman</span>
                <span className="text-green-600 font-medium">Gratis</span>
              </div>
            </div>
            <div className="flex justify-between font-bold text-lg text-[#0A1812] mb-6">
              <span>Total</span>
              <span>Rp {subtotal.toLocaleString('id-ID')}</span>
            </div>
            <button className="w-full bg-[#0A1812] text-white py-3 rounded-full font-semibold hover:bg-[#0A1812]/90 transition-all">
              Checkout Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;