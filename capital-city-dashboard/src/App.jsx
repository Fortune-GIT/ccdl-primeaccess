import React, { useMemo, useState } from "react";
import {
  Bell,
  ChevronDown,
  LayoutGrid,
  Menu,
  Wallet,
  ReceiptText,
  BadgeDollarSign,
  FileText,
  Ticket,
  BarChart3,
  MessageCircle,
  KeyRound,
  Settings,
  LogOut,
  Building2,
  ArrowRight,
  CircleDollarSign,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";
import {
  ResponsiveContainer,
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
  Cell,
} from "recharts";

const sideNav = [
  { label: "Overview", icon: LayoutGrid, active: true },
  { label: "Wallet", icon: Wallet },
  { label: "Transactions", icon: CircleDollarSign },
  { label: "Payments", icon: BadgeDollarSign },
  { label: "Invoices & Receipts", icon: FileText },
  { label: "Vouchers", icon: Ticket },
  { label: "Commissions & Fees", icon: ReceiptText },
  { label: "Analytics", icon: BarChart3 },
];

const walletTabs = ["All", "Fiat", "Crypto"];

const wallets = [
  {
    name: "Etherium",
    type: "Crypto Wallet",
    category: "Crypto",
    badge: "Crypto",
    badgeStyle: "bg-emerald-100 text-emerald-700",
    amount: "₦0.95720892.01",
    value: "₦25,000,000.01",
  },
  {
    name: "Naira",
    type: "Fiat Wallet",
    category: "Fiat",
    badge: "Fiat",
    badgeStyle: "bg-rose-100 text-rose-500",
    amount: "₦20.95720892.01",
    value: "₦25,000,000.01",
  },
  {
    name: "USD",
    type: "Fiat Wallet",
    category: "Fiat",
    badge: "Fiat",
    badgeStyle: "bg-rose-100 text-rose-500",
    amount: "₦20.95720892.01",
    value: "₦25,000,000.01",
  },
  {
    name: "Bitcoin",
    type: "Crypto Wallet",
    category: "Crypto",
    badge: "Crypto",
    badgeStyle: "bg-emerald-100 text-emerald-700",
    amount: "₦2.95720892.01",
    value: "₦25,000,000.01",
  },
];

const transactions = [
  {
    title: "Wallet Deposit",
    subtitle: "Deposit from Mr. John Doe",
    amount: "₦3,500,000.00",
    time: "18 Aug · 14:36",
    iconBg: "bg-emerald-50 border border-emerald-200",
    iconColor: "text-emerald-600",
    status: "text-emerald-600",
  },
  {
    title: "Wallet Withdrawal",
    subtitle: "Withdrawal from Mr. John Doe",
    amount: "₦3,500,000.00",
    time: "18 Aug · 14:36",
    iconBg: "bg-rose-50 border border-rose-200",
    iconColor: "text-rose-500",
    status: "text-rose-500",
  },
  {
    title: "Investment Top-Up",
    subtitle: "Payment from Wallet",
    amount: "₦3,500,000.00",
    time: "18 Aug · 14:36",
    iconBg: "bg-slate-100 border border-slate-200",
    iconColor: "text-slate-500",
    status: "text-amber-500",
  },
];

const balanceChartData = [
  { label: "0", value: 18 },
  { label: "500", value: 18 },
  { label: "1k", value: 54 },
  { label: "1.5k", value: 54 },
  { label: "2k", value: 35 },
  { label: "2.5k", value: 35 },
  { label: "3k", value: 22 },
  { label: "3.5k", value: 22 },
  { label: "4k", value: 35 },
  { label: "4.5k", value: 35 },
  { label: "5k", value: 35 },
  { label: "5.5k", value: 54 },
  { label: "6k", value: 54 },
  { label: "6.5k", value: 35 },
  { label: "7k", value: 35 },
  { label: "7.5k", value: 46 },
  { label: "8k", value: 54 },
  { label: "100", value: 54 },
];

const cashflowChartData = [
  { name: "Revenue", value: 75, fill: "#34d399" },
  { name: "Expenses", value: 25, fill: "#fb7185" },
];

function splitAmountAtLastDot(amount) {
  const lastDotIndex = amount.lastIndexOf(".");

  if (lastDotIndex === -1) {
    return { main: amount, decimal: "" };
  }

  return {
    main: amount.slice(0, lastDotIndex),
    decimal: amount.slice(lastDotIndex),
  };
}

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload || !payload.length) return null;

  return (
    <div className="rounded-lg border border-slate-200 bg-white px-3 py-2 shadow-md">
      <p className="text-[11px] text-slate-500">{label}</p>
      <p className="text-[12px] font-semibold text-slate-800">
        Value: {payload[0].value}
      </p>
    </div>
  );
}

function LineChart() {
  return (
    <div className="mt-3 h-[110px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsLineChart
          data={balanceChartData}
          margin={{ top: 10, right: 6, left: -24, bottom: 0 }}
        >
          <CartesianGrid
            vertical={true}
            horizontal={false}
            stroke="#d1d5db"
            strokeDasharray="4 4"
          />
          <XAxis
            dataKey="label"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 10, fill: "#94a3b8" }}
            interval={2}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#0b7a53"
            strokeWidth={2.5}
            dot={false}
            activeDot={{ r: 4 }}
          />
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  );
}

function CashflowChart() {
  return (
    <div className="mt-5 h-[175px] w-full rounded-2xl border border-slate-100 bg-white p-3">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={cashflowChartData}
          margin={{ top: 10, right: 10, left: -20, bottom: 20 }}
          barCategoryGap="28%"
        >
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 11, fill: "#94a3b8" }}
          />
          <Tooltip
            formatter={(value) => [`${value}%`, "Share"]}
            contentStyle={{
              borderRadius: "10px",
              border: "1px solid #e2e8f0",
              fontSize: "12px",
            }}
          />
          <Bar dataKey="value" radius={[8, 8, 0, 0]}>
            {cashflowChartData.map((entry, index) => (
              <Cell key={index} fill={entry.fill} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      <div className="mt-2 flex items-center gap-6 text-[11px]">
        <span className="font-medium text-[#53A333]">75% Revenue</span>
        <span className="font-medium text-rose-500">25% Expenses</span>
      </div>
    </div>
  );
}

function SideIcon({ icon: Icon, active = false, notification = false }) {
  return (
    <button
      className={`relative grid h-10 w-10 place-items-center rounded-lg transition ${
        active ? "bg-white/18 text-white" : "text-white/90 hover:bg-white/10"
      }`}
    >
      <Icon size={18} />
      {notification && (
        <span className="absolute right-2 top-2 h-2 w-2 rounded-full border border-white bg-white" />
      )}
    </button>
  );
}

function VerifiedBadge() {
  return (
    <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#53C34D]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-2.5 w-2.5 text-white"
      >
        <path
          fillRule="evenodd"
          d="M16.704 5.29a1 1 0 010 1.414l-7.2 7.2a1 1 0 01-1.414 0l-3.2-3.2a1 1 0 111.414-1.414l2.493 2.493 6.493-6.493a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}

function TransactionIcon({ bgClass, colorClass }) {
  return (
    <div className={`grid h-9 w-9 place-items-center rounded-full ${bgClass}`}>
      <Wallet size={14} className={colorClass} strokeWidth={2.2} />
    </div>
  );
}

function WalletAmount({ amount }) {
  const { main, decimal } = splitAmountAtLastDot(amount);

  return (
    <p className="text-[18px] font-semibold leading-none tracking-tight md:text-2xl">
      <span className="text-slate-900">{main}</span>
      {decimal && <span className="text-slate-400">{decimal}</span>}
    </p>
  );
}

function WalletValue({ value }) {
  const { main, decimal } = splitAmountAtLastDot(value);

  return (
    <p className="mt-1 text-[10px] leading-none">
      <span className="text-slate-400">{main}</span>
      {decimal && <span className="text-slate-300">{decimal}</span>}
    </p>
  );
}

function App() {
  const [activeWalletTab, setActiveWalletTab] = useState("All");

  const currentDate = useMemo(
    () =>
      new Date().toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
    []
  );

  const filteredWallets = useMemo(() => {
    if (activeWalletTab === "All") return wallets;
    return wallets.filter((wallet) => wallet.category === activeWalletTab);
  }, [activeWalletTab]);

  return (
    <div className="min-h-screen bg-[#f5f6f7] text-slate-800">
      <div className="flex min-h-screen">
        <aside className="flex w-[74px] flex-col items-center justify-between bg-gradient-to-b from-[#0a4e04] to-[#084700] py-4">
          <div className="flex flex-col items-center gap-5">
            <SideIcon icon={Menu} />
            <div className="flex flex-col gap-3">
              <SideIcon icon={LayoutGrid} active />
              <SideIcon icon={Wallet} />
              <SideIcon icon={Building2} />
              <SideIcon icon={ShieldCheck} />
              <SideIcon icon={MessageCircle} notification />
              <SideIcon icon={KeyRound} />
              <SideIcon icon={BarChart3} />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <SideIcon icon={Settings} />
          </div>
        </aside>

        <aside className="hidden h-screen w-[245px] overflow-y-auto border-r border-slate-200 bg-[#f8f8f8] px-4 py-5 lg:block">
          <div className="flex min-h-[125vh] flex-col">
            <div className="flex items-center justify-between border-b border-slate-200 pb-5">
              <div className="flex items-center gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-emerald-100 text-emerald-700">
                  <TrendingUp size={18} />
                </div>

                <div>
                  <p className="text-[18px] font-semibold leading-none tracking-tight text-slate-700">
                    Capital City
                  </p>
                </div>
              </div>

              <button className="text-slate-500">
                <Menu size={16} />
              </button>
            </div>

            <nav className="mt-4 space-y-1">
              {sideNav.map((item) => {
                const Icon = item.icon;

                return (
                  <button
                    key={item.label}
                    className={`flex w-full items-center gap-2 rounded-[10px] px-3 py-2 text-left text-[12px] transition ${
                      item.active
                        ? "border border-slate-200 bg-white font-medium text-emerald-700 shadow-sm"
                        : "text-slate-600 hover:bg-white"
                    }`}
                  >
                    <Icon size={14} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>

            <div className="mt-auto border-t border-slate-200 pt-5">
              <button className="flex w-full items-center gap-2.5 rounded-xl px-4 py-2.5 text-left text-[13px] text-slate-600 hover:bg-white">
                <Settings size={15} />
                <span>Settings</span>
              </button>

              <button className="flex w-full items-center gap-2.5 rounded-xl px-4 py-2.5 text-left text-[13px] text-rose-500 hover:bg-white">
                <LogOut size={15} />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </aside>

        <main className="flex-1 p-4 md:p-5">
          <div className="overflow-hidden rounded-[26px] border border-slate-200 bg-[#f7f7f7] shadow-sm">
            <header className="flex flex-col gap-4 border-b border-slate-200 px-5 py-4 md:flex-row md:items-center md:justify-between md:px-6">
              <div>
                <h1 className="text-[18px] font-semibold tracking-tight text-slate-800">
                  Hey, Aslam!
                </h1>
                <p className="mt-1 text-[11px] text-slate-500">{currentDate}</p>
              </div>

              <div className="flex items-center justify-between gap-4 md:justify-end">
                <button className="relative text-slate-500">
                  <Bell size={18} />
                  <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-rose-500" />
                </button>

                <div className="flex items-center gap-2.5 rounded-full pl-1 pr-1">
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80"
                    alt="profile"
                    className="h-9 w-9 rounded-full object-cover"
                  />

                  <div className="hidden sm:block">
                    <div className="flex items-center gap-1.5">
                      <p className="text-[12px] font-semibold leading-none text-slate-800">
                        Aslam Dikrullahi
                      </p>
                      <VerifiedBadge />
                    </div>
                    <p className="mt-1 text-[10px] leading-none text-slate-400">
                      name@email.com
                    </p>
                  </div>

                  <ChevronDown size={16} className="text-slate-500" />
                </div>
              </div>
            </header>

            <section className="space-y-4 p-4 md:space-y-4 md:p-5">
              <div className="rounded-[20px] border border-slate-200 bg-white px-4 py-4 md:px-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] text-slate-500">Available Balance</p>
                    <div className="mt-1.5 flex flex-wrap items-center gap-2">
                      <h2 className="text-[24px] font-semibold tracking-tight text-slate-900 md:text-[28px]">
                        ₦200,480,000<span className="text-slate-400">.24</span>
                      </h2>
                      <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
                        +5%
                      </span>
                    </div>
                  </div>

                  <button className="text-[12px] font-medium text-[#53A333] hover:text-emerald-700 md:text-[13px]">
                    View Wallets
                  </button>
                </div>

                <LineChart />
              </div>

              <div className="rounded-[20px] border border-slate-200 bg-white p-4 md:p-[18px]">
                <div className="flex items-center gap-2 text-slate-800">
                  <Wallet size={16} className="text-slate-500" />
                  <h3 className="text-[16px] font-semibold tracking-tight">Wallets</h3>
                </div>

                <div className="mt-3 inline-flex rounded-[10px] border border-slate-200 bg-[#f8f8f8] p-[3px]">
                  {walletTabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveWalletTab(tab)}
                      className={`min-w-[58px] rounded-lg px-3 py-1.5 text-[11px] font-medium leading-none transition ${
                        activeWalletTab === tab
                          ? "bg-white text-slate-800 shadow-sm"
                          : "text-slate-500 hover:text-slate-700"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                <div className="mt-4 grid gap-3 xl:grid-cols-2">
                  {filteredWallets.map((item) => (
                    <div
                      key={item.name}
                      className="rounded-2xl border border-slate-200 bg-white px-4 py-3.5 shadow-[0_1px_0_rgba(15,23,42,0.02)]"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-2.5">
                          <div className="grid h-9 w-9 place-items-center rounded-full bg-slate-100 text-slate-500">
                            <Wallet size={15} />
                          </div>

                          <div>
                            <p className="text-[13px] font-medium leading-none text-slate-800">
                              {item.name}
                            </p>
                            <p className="mt-1 text-[10px] text-slate-400">{item.type}</p>
                          </div>
                        </div>

                        <span
                          className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${item.badgeStyle}`}
                        >
                          {item.badge}
                        </span>
                      </div>

                      <div className="mt-5 flex items-end justify-between gap-4">
                        <div>
                          <WalletAmount amount={item.amount} />
                          <WalletValue value={item.value} />
                        </div>

                        <button className="text-[13px] font-medium text-[#53A333]">
                          View
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {filteredWallets.length === 0 && (
                  <div className="mt-4 rounded-2xl border border-dashed border-slate-200 px-4 py-8 text-center text-[12px] text-slate-400">
                    No wallets found in this category.
                  </div>
                )}
              </div>

              <div className="grid gap-4 xl:grid-cols-[1.55fr_1fr]">
                <div className="rounded-[20px] border border-slate-200 bg-white p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[11px] text-slate-500">Cashflow</p>
                      <h3 className="mt-1 text-[18px] font-semibold tracking-tight text-slate-900 md:text-2xl">
                        ₦60,000<span className="text-slate-400">.01</span>
                      </h3>
                    </div>

                    <button className="rounded-[10px] border border-slate-200 px-3 py-1.5 text-[11px] text-slate-600">
                      Past Year
                    </button>
                  </div>

                  <CashflowChart />

                  <button className="mt-3 rounded-full border border-slate-200 px-4 py-2 text-[11px] font-medium text-slate-700">
                    See all
                  </button>
                </div>

                <div className="rounded-[20px] border border-slate-200 bg-white p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <CircleDollarSign size={16} className="text-slate-500" />
                      <h3 className="text-[16px] font-semibold tracking-tight">
                        Recent Transactions
                      </h3>
                    </div>

                    <button className="text-[12px] font-medium text-[#53A333]">
                      See All
                    </button>
                  </div>

                  <div className="mt-3 grid grid-cols-3 rounded-xl border border-slate-200 bg-[#f8f8f8] p-1 text-[11px]">
                    <button className="rounded-lg bg-white px-3 py-2 font-medium text-slate-800 shadow-sm">
                      All
                    </button>
                    <button className="rounded-lg px-3 py-2 text-slate-600">Incoming</button>
                    <button className="rounded-lg px-3 py-2 text-slate-600">Outgoing</button>
                  </div>

                  <div className="mt-3 divide-y divide-slate-100">
                    {transactions.map((item) => (
                      <div key={item.title} className="flex items-center gap-3 py-3">
                        <TransactionIcon
                          bgClass={item.iconBg}
                          colorClass={item.iconColor}
                        />

                        <div className="min-w-0 flex-1">
                          <p className="truncate text-[13px] font-medium text-slate-800">
                            {item.title}
                          </p>
                          <p className="truncate text-[10px] text-slate-400">
                            {item.subtitle}
                          </p>
                        </div>

                        <div className="text-right">
                          <p className="text-[13px] font-semibold text-slate-900">
                            {item.amount}
                          </p>
                          <div className="mt-0.5 flex items-center justify-end gap-1.5">
                            <span className="text-[10px] text-slate-400">{item.time}</span>
                            <span className={`text-[9px] ${item.status}`}>●</span>
                          </div>
                        </div>

                        <ArrowRight size={14} className="text-slate-400" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;