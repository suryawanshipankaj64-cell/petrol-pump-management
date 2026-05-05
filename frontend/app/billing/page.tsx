'use client';

import { useState } from 'react';
import { Fuel, Receipt, CreditCard, Smartphone, Download, Share2 } from 'lucide-react';

export default function Billing() {
  const [formData, setFormData] = useState({
    customerName: '',
    vehicleNo: '',
    fuelType: 'Petrol',
    liters: '',
    rate: '98.50',
    paymentMethod: 'Cash',
    gst: 18
  });
  const [billNo, setBillNo] = useState(1001);

  const calculateTotal = () => {
    const amount = parseFloat(formData.liters) * parseFloat(formData.rate);
    const gstAmount = amount * (formData.gst / 100);
    return (amount + gstAmount).toFixed(2);
  };

  const generateBill = (e) => {
    e.preventDefault();
    const total = calculateTotal();
    // PDF generation logic here
    alert(`Bill #${billNo}\nCustomer: ${formData.customerName}\nTotal: ₹${total}\nDownload PDF & WhatsApp ready!`);
    setBillNo(billNo + 1);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Receipt className="w-8 h-8 text-blue-500" />
        <h1 className="text-3xl font-bold">Generate Fuel Bill</h1>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Billing Form */}
        <div className="card">
          <h2 className="text-2xl font-bold mb-6">Bill Details</h2>
          <form onSubmit={generateBill} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Customer Name</label>
              <input
                value={formData.customerName}
                onChange={(e) => setFormData({...formData, customerName: e.target.value})}
                className="w-full p-4 bg-slate-800 border border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter customer name"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Vehicle No</label>
                <input
                  value={formData.vehicleNo}
                  onChange={(e) => setFormData({...formData, vehicleNo: e.target.value})}
                  className="w-full p-4 bg-slate-800 border border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500"
                  placeholder="DL01AB1234"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Fuel Type</label>
                <select
                  value={formData.fuelType}
                  onChange={(e) => setFormData({...formData, fuelType: e.target.value})}
                  className="w-full p-4 bg-slate-800 border border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500"
                >
                  <option>Petrol</option>
                  <option>Diesel</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Liters</label>
                <input
                  type="number"
                  value={formData.liters}
                  onChange={(e) => setFormData({...formData, liters: e.target.value})}
                  className="w-full p-4 bg-slate-800 border border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500"
                  placeholder="0.00"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Rate/Ltr</label>
                <input
                  type="number"
                  value={formData.rate}
                  onChange={(e) => setFormData({...formData, rate: e.target.value})}
                  className="w-full p-4 bg-slate-800 border border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500"
                  placeholder="98.50"
                />
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-slate-800 rounded-xl">
              <span>GST ({formData.gst}%)</span>
              <span>₹{calculateTotal()}</span>
            </div>

            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5">
              Generate Bill & Print
            </button>
          </form>
        </div>

        {/* Payment Options */}
        <div className="card">
          <h2 className="text-2xl font-bold mb-6">Payment Methods</h2>
          <div className="space-y-4">
            <button className="w-full flex items-center gap-3 p-4 bg-green-600/20 hover:bg-green-600/30 border-2 border-green-500/50 rounded-xl transition-all">
              <CreditCard className="w-6 h-6" />
              <span className="font-medium">Card/UPI</span>
            </button>
            <button className="w-full flex items-center gap-3 p-4 bg-orange-600/20 hover:bg-orange-600/30 border-2 border-orange-500/50 rounded-xl transition-all">
              <Smartphone className="w-6 h-6" />
              <span className="font-medium">UPI QR</span>
            </button>
            <button className="w-full flex items-center gap-3 p-4 bg-gray-600/20 hover:bg-gray-600/30 border-2 border-gray-500/50 rounded-xl transition-all">
              <Fuel className="w-6 h-6" />
              <span className="font-medium">Cash</span>
            </button>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-700">
            <div className="flex gap-3">
              <button className="flex-1 flex items-center gap-2 p-3 bg-indigo-600/20 hover:bg-indigo-600/30 border rounded-xl transition-all justify-center">
                <Download className="w-5 h-5" />
                Download PDF
              </button>
              <button className="flex-1 flex items-center gap-2 p-3 bg-green-600/20 hover:bg-green-600/30 border rounded-xl transition-all justify-center">
                <Share2 className="w-5 h-5" />
                WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

