<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Компьютерная томография (КТ)");
?>

<?
$q = My::TransKT($link);
//для услуг диагностики: грудь, член, яйца, голова и т.д
if($link and $q!='none'):
global $arrFilter;
	$arrFilter = array (
		"NAME" => $q,
		"PROPERTY_DIAGNOSTIK"=> 'компьютерная томография'
	);
	?>
	<pre><?print_r($arrFilter);?></pre>
<?$APPLICATION->IncludeComponent("bitrix:catalog.section", "filter_list_clinic", array(
	"IBLOCK_TYPE" => "text",
	"IBLOCK_ID" => "6",
	"SECTION_ID" => $_REQUEST["SECTION_ID"],
	"SECTION_CODE" => "",
	"SECTION_USER_FIELDS" => array(
		0 => "",
		1 => "",
	),
	"ELEMENT_SORT_FIELD" => "",
	"ELEMENT_SORT_ORDER" => "",
	"ELEMENT_SORT_FIELD2" => "",
	"ELEMENT_SORT_ORDER2" => "",
	"FILTER_NAME" => "arrFilter",
	"INCLUDE_SUBSECTIONS" => "Y",
	"SHOW_ALL_WO_SECTION" => "Y",
	"PAGE_ELEMENT_COUNT" => "10",
	"LINE_ELEMENT_COUNT" => "3",
	"PROPERTY_CODE" => array(
		0 => "CLINIC_ID",
		1 => "DIAGNOSTIK",
		2 => "ADRES",
		3 => "",
	),
	"OFFERS_LIMIT" => "5",
	"TEMPLATE_THEME" => "",
	"ADD_PICT_PROP" => "-",
	"LABEL_PROP" => "-",
	"MESS_BTN_BUY" => "Купить",
	"MESS_BTN_ADD_TO_BASKET" => "В корзину",
	"MESS_BTN_SUBSCRIBE" => "Подписаться",
	"MESS_BTN_DETAIL" => "Подробнее",
	"MESS_NOT_AVAILABLE" => "Нет в наличии",
	"SECTION_URL" => "",
	"DETAIL_URL" => "",
	"SECTION_ID_VARIABLE" => "SECTION_ID",
	"AJAX_MODE" => "N",
	"AJAX_OPTION_JUMP" => "N",
	"AJAX_OPTION_STYLE" => "Y",
	"AJAX_OPTION_HISTORY" => "N",
	"CACHE_TYPE" => "A",
	"CACHE_TIME" => "36000000",
	"CACHE_GROUPS" => "Y",
	"SET_META_KEYWORDS" => "Y",
	"META_KEYWORDS" => "",
	"SET_META_DESCRIPTION" => "Y",
	"META_DESCRIPTION" => "",
	"BROWSER_TITLE" => "-",
	"ADD_SECTIONS_CHAIN" => "N",
	"DISPLAY_COMPARE" => "N",
	"SET_TITLE" => "Y",
	"SET_STATUS_404" => "N",
	"CACHE_FILTER" => "N",
	"PRICE_CODE" => array(
	),
	"USE_PRICE_COUNT" => "N",
	"SHOW_PRICE_COUNT" => "1",
	"PRICE_VAT_INCLUDE" => "Y",
	"BASKET_URL" => "/personal/basket.php",
	"ACTION_VARIABLE" => "action",
	"PRODUCT_ID_VARIABLE" => "id",
	"USE_PRODUCT_QUANTITY" => "N",
	"ADD_PROPERTIES_TO_BASKET" => "Y",
	"PRODUCT_PROPS_VARIABLE" => "prop",
	"PARTIAL_PRODUCT_PROPERTIES" => "N",
	"PRODUCT_PROPERTIES" => array(
	),
	"PAGER_TEMPLATE" => "visual",
	"DISPLAY_TOP_PAGER" => "N",
	"DISPLAY_BOTTOM_PAGER" => "Y",
	"PAGER_TITLE" => "",
	"PAGER_SHOW_ALWAYS" => "N",
	"PAGER_DESC_NUMBERING" => "N",
	"PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
	"PAGER_SHOW_ALL" => "N",
	"AJAX_OPTION_ADDITIONAL" => "",
	"PRODUCT_QUANTITY_VARIABLE" => "quantity"
	),
	false
);?>
<?else:?>
<?
//для вида диагностики: рентген, мрт, кт, узи и т.д
CModule::IncludeModule("iblock");	
  $arFilter = Array('IBLOCK_ID'=>6, 'GLOBAL_ACTIVE'=>'Y', 'NAME'=>'компьютерная томография');
  $db_list = CIBlockSection::GetList(Array('SORT'=>'ASC'), $arFilter, true);
  $db_list->NavStart(10);
  echo $db_list->GetPageNavStringEx($navComponentObject, '', 'visual', 'N', '3500');
  while($ar_result = $db_list->GetNext())
  {
  $countclinic = 1;
  $countprice = 1; 

	$APPLICATION->IncludeComponent("bitrix:catalog.section", "diagnost_price_list", array(
		"IBLOCK_TYPE" => "text",
		"IBLOCK_ID" => "6",
		"SECTION_ID" => $ar_result["ID"],
		"SECTION_CODE" => "",
		"SECTION_USER_FIELDS" => array(
			0 => "",
			1 => "",
		),
		"ELEMENT_SORT_FIELD" => $sort,
		"ELEMENT_SORT_ORDER" => $ord,
		"ELEMENT_SORT_FIELD2" => "",
		"ELEMENT_SORT_ORDER2" => "",
		"FILTER_NAME" => "arrFilter",
		"INCLUDE_SUBSECTIONS" => "Y",
		"SHOW_ALL_WO_SECTION" => "Y",
		"PAGE_ELEMENT_COUNT" => "6",
		"LINE_ELEMENT_COUNT" => "3",
		"PROPERTY_CODE" => array(
			0 => "CLINIC_ID",
			1 => "PRICE",
			2 => "",
		),
		"OFFERS_LIMIT" => "5",
		"TEMPLATE_THEME" => "blue",
		"ADD_PICT_PROP" => "-",
		"LABEL_PROP" => "-",
		"MESS_BTN_BUY" => "Купить",
		"MESS_BTN_ADD_TO_BASKET" => "В корзину",
		"MESS_BTN_SUBSCRIBE" => "Подписаться",
		"MESS_BTN_DETAIL" => "Подробнее",
		"MESS_NOT_AVAILABLE" => "Нет в наличии",
		"SECTION_URL" => "",
		"DETAIL_URL" => "",
		"SECTION_ID_VARIABLE" => "SECTION_ID",
		"AJAX_MODE" => "N",
		"AJAX_OPTION_JUMP" => "N",
		"AJAX_OPTION_STYLE" => "Y",
		"AJAX_OPTION_HISTORY" => "N",
		"CACHE_TYPE" => "A",
		"CACHE_TIME" => "36000000",
		"CACHE_GROUPS" => "Y",
		"SET_META_KEYWORDS" => "Y",
		"META_KEYWORDS" => "-",
		"SET_META_DESCRIPTION" => "Y",
		"META_DESCRIPTION" => "-",
		"BROWSER_TITLE" => "-",
		"ADD_SECTIONS_CHAIN" => "N",
		"DISPLAY_COMPARE" => "N",
		"SET_TITLE" => "Y",
		"SET_STATUS_404" => "N",
		"CACHE_FILTER" => "N",
		"PRICE_CODE" => array(
		),
		"USE_PRICE_COUNT" => "N",
		"SHOW_PRICE_COUNT" => "1",
		"PRICE_VAT_INCLUDE" => "Y",
		"BASKET_URL" => "/personal/basket.php",
		"ACTION_VARIABLE" => "action",
		"PRODUCT_ID_VARIABLE" => "id",
		"USE_PRODUCT_QUANTITY" => "N",
		"ADD_PROPERTIES_TO_BASKET" => "Y",
		"PRODUCT_PROPS_VARIABLE" => "prop",
		"PARTIAL_PRODUCT_PROPERTIES" => "N",
		"PRODUCT_PROPERTIES" => array(
		),
		"PAGER_TEMPLATE" => "modern",
		"DISPLAY_TOP_PAGER" => "N",
		"DISPLAY_BOTTOM_PAGER" => "N",
		"PAGER_TITLE" => "Товары",
		"PAGER_SHOW_ALWAYS" => "N",
		"PAGER_DESC_NUMBERING" => "N",
		"PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
		"PAGER_SHOW_ALL" => "N",
		"AJAX_OPTION_ADDITIONAL" => "",
		"PRODUCT_QUANTITY_VARIABLE" => "quantity"
		),
		false
	);	
  }
  echo $db_list->GetPageNavStringEx($navComponentObject, '', 'visual', 'N', '3500');
?>
<?endif;?>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>