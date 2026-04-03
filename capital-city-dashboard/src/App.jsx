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

const topGraphPoints = [
  18, 18, 54, 54, 35, 35, 22, 22, 35, 35, 35, 54, 54, 35, 35, 46, 54, 54,
];

function LineChart() {
  const width = 1000;
  const height = 110;
  const stepX = width / (topGraphPoints.length - 1);
  const points = topGraphPoints
    .map((value, index) => `${index * stepX},${height - value}`)
    .join(" ");

  return (
    <div className="mt-3">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="h-[84px] w-full overflow-visible"
      >
        {[0.2, 0.4, 0.6, 0.8].map((p, i) => (
          <line
            key={i}
            x1={width * p}
            x2={width * p}
            y1="10"
            y2={height - 6}
            stroke="#d1d5db"
            strokeDasharray="4 4"
            strokeWidth="1"
          />
        ))}
        <polyline
          fill="none"
          stroke="#0b7a53"
          strokeWidth="2.5"
          strokeLinejoin="round"
          strokeLinecap="round"
          points={points}
        />
      </svg>

      <div className="mt-0.5 grid grid-cols-6 text-[10px] text-slate-400">
        <span>0</span>
        <span className="text-center">2k</span>
        <span className="text-center">3k</span>
        <span className="text-center">4k</span>
        <span className="text-center">5k</span>
        <span className="text-right">100</span>
      </div>
    </div>
  );
}

function CashflowChart() {
  return (
    <div className="mt-5 h-[175px] rounded-2xl border border-slate-100 bg-white p-1">
      <div className="flex h-full items-end gap-3">
        <div className="relative flex h-[78%] w-[72%] items-end rounded-xl bg-white">
          <div className="absolute left-0 top-0 h-full w-[3px] rounded-full bg-emerald-400" />
          <div className="mb-[7px] h-[3px] w-full rounded-full bg-emerald-400" />
          <span className="absolute bottom-[14px] left-2 text-[11px] font-medium leading-none text-[#53A333]">
            75% Revenue
          </span>
        </div>

        <div className="relative flex h-[78%] w-[28%] items-end">
          <div className="absolute left-0 top-0 h-full w-[3px] rounded-full bg-rose-400" />
          <div className="mb-[7px] h-[3px] w-full rounded-full bg-[repeating-linear-gradient(to_right,#fb7185_0px,#fb7185_3px,transparent_3px,transparent_7px)]" />
          <span className="absolute bottom-[14px] left-2 text-[11px] font-medium leading-none text-rose-500">
            25% Expenses
          </span>
        </div>
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
                  Hey, Fortune!
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
                        Fortune Anosike
                      </p>
                      <VerifiedBadge />
                    </div>
                    <p className="mt-1 text-[10px] leading-none text-slate-400">
                      anosike.fortune@gmail.com
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
                          <p className="text-[18px] font-semibold tracking-tight text-slate-900 md:text-2xl">
                            {item.amount}
                          </p>
                          <p className="mt-1 text-[10px] text-slate-400">{item.value}</p>
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