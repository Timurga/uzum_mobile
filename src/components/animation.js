export default function Animation() {
    const [isOpenIncomeOutcome, setIsOpenIncomeOutcome] = useState(true);
    const [isOpenIncome, setIsOpenIncome] = useState(true);


    const toggleBlockIncomeOutcome = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setIsOpenIncomeOutcome(!isOpenIncomeOutcome);
        return { paddingBottom: 10 }
    };

    const toggleBlockIncome = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setIsOpenIncome(!isOpenIncome);

    };

    const blockHeightIncomeOutcome = isOpenIncomeOutcome ? null : 0;
    const blockHeightIncome = isOpenIncome ? null : 0;
}